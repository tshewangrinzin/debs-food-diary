import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { NarrativePhase } from '../types';

export const MusicPlayer: React.FC<{ phase: NarrativePhase }> = ({ phase }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);

  // Initialize Audio Context on user interaction (browser policy)
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const stopSound = () => {
    oscillatorsRef.current.forEach(osc => {
      try { osc.stop(); osc.disconnect(); } catch (e) {}
    });
    oscillatorsRef.current = [];
    
    if (lfoRef.current) {
      try { lfoRef.current.stop(); lfoRef.current.disconnect(); } catch (e) {}
      lfoRef.current = null;
    }

    if (noiseNodeRef.current) {
      try { noiseNodeRef.current.stop(); noiseNodeRef.current.disconnect(); } catch (e) {}
      noiseNodeRef.current = null;
    }
  };

  const playSound = useCallback(() => {
    if (!audioCtxRef.current) return;
    stopSound();

    const ctx = audioCtxRef.current;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    gainNodeRef.current = masterGain;

    const now = ctx.currentTime;

    switch (phase) {
      case NarrativePhase.NORMAL:
        // Cute Major Chord (C major 7) - High pitch, triangle waves
        masterGain.gain.setValueAtTime(0.1, now);
        [523.25, 659.25, 783.99, 987.77].forEach((freq, i) => { // C5, E5, G5, B5
          const osc = ctx.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now);
          
          // Slight vibrato for "cute" effect
          const lfo = ctx.createOscillator();
          lfo.frequency.value = 4; // 4Hz vibrato
          const lfoGain = ctx.createGain();
          lfoGain.gain.value = 2;
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();
          
          osc.connect(masterGain);
          osc.start();
          oscillatorsRef.current.push(osc);
          oscillatorsRef.current.push(lfo); 
        });
        break;

      case NarrativePhase.STAGE_1:
        // Eerie: Minor Chord, lower pitch, slow detune
        masterGain.gain.setValueAtTime(0.15, now);
        [261.63, 311.13, 392.00].forEach((freq) => { // C4, Eb4, G4 (C Minor)
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          
          // Slow, unsettling detune LFO
          const lfo = ctx.createOscillator();
          lfo.type = 'sine';
          lfo.frequency.value = 0.2; // Very slow
          const lfoGain = ctx.createGain();
          lfoGain.gain.value = 15; // Significant pitch bend
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          osc.connect(masterGain);
          osc.start();
          oscillatorsRef.current.push(osc);
          oscillatorsRef.current.push(lfo);
        });
        break;

      case NarrativePhase.STAGE_2:
        // Horror: Low Drones + Binaural Beats
        masterGain.gain.setValueAtTime(0.2, now);
        
        // Drone 1
        const osc1 = ctx.createOscillator();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(60, now); // Low B1
        osc1.connect(masterGain);
        osc1.start();
        oscillatorsRef.current.push(osc1);

        // Drone 2 (Slightly detuned to create beating/pulsing)
        const osc2 = ctx.createOscillator();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(63, now); // 3Hz difference = 3 pulses per second
        osc2.connect(masterGain);
        osc2.start();
        oscillatorsRef.current.push(osc2);
        break;

      case NarrativePhase.FINAL:
        // Chaos: White Noise + Random Screeches
        masterGain.gain.setValueAtTime(0.05, now); // Lower volume for noise

        // White Noise
        const bufferSize = ctx.sampleRate * 2; // 2 seconds buffer
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;
        
        // Filter the noise to sound more like "TV Static"
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1000;
        
        noise.connect(filter);
        filter.connect(masterGain);
        noise.start();
        noiseNodeRef.current = noise;

        // Random high pitch beep loop
        const beepOsc = ctx.createOscillator();
        beepOsc.type = 'square';
        beepOsc.frequency.setValueAtTime(3000, now);
        
        const beepGain = ctx.createGain();
        beepGain.gain.setValueAtTime(0, now);
        
        // Create a rhythm of random beeps
        setInterval(() => {
            if(Math.random() > 0.7) {
                 beepOsc.frequency.setValueAtTime(Math.random() * 2000 + 2000, ctx.currentTime);
                 beepGain.gain.setTargetAtTime(0.1, ctx.currentTime, 0.01);
                 beepGain.gain.setTargetAtTime(0, ctx.currentTime + 0.1, 0.1);
            }
        }, 500);

        beepOsc.connect(beepGain);
        beepGain.connect(masterGain);
        beepOsc.start();
        oscillatorsRef.current.push(beepOsc);
        break;
    }
  }, [phase]);

  // Handle Play/Pause Toggle
  const togglePlay = () => {
    if (isPlaying) {
      stopSound();
      setIsPlaying(false);
    } else {
      initAudio();
      setIsPlaying(true);
    }
  };

  // Update sound when phase changes IF we are already playing
  useEffect(() => {
    if (isPlaying) {
      playSound();
    }
    return () => {
       // Cleanup not needed here strictly as playSound handles stopping previous, 
       // but good for unmount.
    };
  }, [phase, isPlaying, playSound]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stopSound();
  }, []);

  const getCurrentTrack = () => {
    switch(phase) {
      case NarrativePhase.STAGE_1: return "Unknown Artist - Static";
      case NarrativePhase.STAGE_2: return "Heartbeat - Loop";
      case NarrativePhase.FINAL: return "NO SIGNAL";
      default: return "Kyary Pamyu Pamyu - PONPONPON";
    }
  };

  return (
    <div className={`
      border-2 rounded p-1 shadow-lg font-mono transition-colors duration-1000
      ${phase === NarrativePhase.FINAL ? 'bg-black border-red-900 text-red-600' : 'bg-gray-800 border-gray-600 text-green-400'}
    `}>
      <div className={`
        p-2 mb-2 border h-12 flex items-center justify-center overflow-hidden
        ${phase === NarrativePhase.FINAL ? 'bg-black border-red-900' : 'bg-black border-gray-600'}
      `}>
        <div className="flex items-center gap-2">
           {isPlaying && <Volume2 size={12} className="animate-pulse" />}
           <p className={`whitespace-nowrap ${isPlaying ? 'animate-pulse' : ''}`}>
             {isPlaying ? `🎵 ${getCurrentTrack()}` : 'STOPPED'}
            </p>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 pb-1">
        <div className="text-xs">
            {phase === NarrativePhase.FINAL ? '??:??' : '00:42'} <span className="opacity-50">/ {phase === NarrativePhase.FINAL ? '??:??' : '03:21'}</span>
        </div>
        <div className="flex gap-2">
            <button className="hover:text-white"><SkipBack size={16} /></button>
            <button onClick={togglePlay} className="hover:text-white">
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button className="hover:text-white"><SkipForward size={16} /></button>
        </div>
      </div>
    </div>
  );
};