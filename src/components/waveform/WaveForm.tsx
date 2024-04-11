import { useState } from "react";
import type WaveSurfer from "wavesurfer.js";
import WavesurferPlayer from "@wavesurfer/react";
import song from "./hi.mp3";
import "./waveform.css";
import customRender from "./customRender.ts";

export default function WaveForm() {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Play/pause the audio
  const onPlayPause = () => {
    setIsPlaying((playing) => {
      if (wavesurfer?.isPlaying() !== !playing) {
        wavesurfer?.playPause();
        return !playing;
      }
      return playing;
    });
  };

  return (
    <div className="waveForm">
      <div className="wavesurfer">
        <WavesurferPlayer
          barWidth={150}
          height={110}
          waveColor="#ffffff"
          progressColor={"#B63636"}
          url={song}
          onReady={(ws) => setWavesurfer(ws)}
          //   onReady={wavesurfer?.playPause}
          //   onInit={wavesurfer?.play}
          onLoad={wavesurfer?.play}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          renderFunction={customRender}
          onClick={onPlayPause}
        />
      </div>
    </div>
  );
}
