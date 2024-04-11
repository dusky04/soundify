import "./App.css";
import AudioPlayer from "./components/audioplayer/AudioPlayer.tsx";
import WaveForm from "./components/waveform/WaveForm.tsx";

function App() {
  return (
    <>
      <AudioPlayer
        songName="Luna Nova"
        artistName="Eternal Embrace"
        artistTag="LUN"
        songTag="#Metalcore"
      />

      {/* <WaveForm /> */}
    </>
  );
}

export default App;
