import { useState } from "react";
import type WaveSurfer from "wavesurfer.js";
import WavesurferPlayer from "@wavesurfer/react";
import song from "./hi.mp3";
import "./waveform.css";

function customRender(
  channels: (number[] | Float32Array)[],
  ctx: CanvasRenderingContext2D
): void {
  const { width, height } = ctx.canvas;
  const scale = channels[0].length / width;
  const step = 10;

  ctx.translate(0, height / 2);
  ctx.strokeStyle = ctx.fillStyle;
  ctx.beginPath();

  for (let i = 0; i < width; i += step * 2) {
    const index = Math.floor(i * scale);
    const value = Math.abs(channels[0][index]);
    let x = i;
    let y = value * height;

    ctx.moveTo(x, 0);
    ctx.lineTo(x, y);
    ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, true);
    ctx.lineTo(x + step, 0);

    x = x + step;
    y = -y;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, y);
    ctx.arc(x + step / 2, y, step / 2, Math.PI, 0, false);
    ctx.lineTo(x + step, 0);
  }

  ctx.stroke();
  ctx.closePath();
}

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
          height={130}
          waveColor="#ffffff"
          progressColor={"#B63636"}
          url={song}
          onReady={(ws) => setWavesurfer(ws)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          renderFunction={customRender}
        />
      </div>
      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        {wavesurfer?.getDuration()}
        <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>{" "}
    </div>
  );
}
