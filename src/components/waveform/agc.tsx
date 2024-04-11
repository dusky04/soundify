import { useState } from "react";
import type WaveSurfer from "wavesurfer.js";
import WavesurferPlayer from "@wavesurfer/react";
import song from "./hi.mp3";

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
    <>
      <div className="waveForm">hjkhk</div>
    </>
  );
}

{
  /* <WavesurferPlayer
        height={100}
        waveColor="#FFFFFF"
        url={song}
        onReady={(ws) => setWavesurfer(ws)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div style={{ margin: "1em 0", display: "flex", gap: "1em" }}>
        {wavesurfer?.getDuration()}
        <button onClick={onPlayPause} style={{ minWidth: "5em" }}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div> */
}
