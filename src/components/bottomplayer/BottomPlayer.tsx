import WaveForm from "../waveform/WaveForm";
import "./bottomplayer.css";

export default function BottomPlayer() {
  return (
    <>
      <div className="bottomPlayerWrapper"></div>
      <div className="bottomPlayer">
        <i className="playButtonIcon fa-solid fa-play"></i>
        <WaveForm />
        <i className="volumeButtonIcon fa-solid fa-volume-high"></i>
      </div>
    </>
  );
}
