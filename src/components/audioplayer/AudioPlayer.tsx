import "./audioplayer.css";
import "../../assets/fonts.css";
import { useState } from "react";
import WaveForm from "../waveform/WaveForm.tsx";
// import { useState } from "react";

function playButtonClicked() {
  console.log("hi");
  return <h1>helo</h1>;
}

// AudioPlayer Props
type audioPlayerProps = {
  songName: string;
  artistName: string;
  artistTag: string;
  songTag: string;
};

const AudioPlayer = (props: audioPlayerProps) => {
  const [playSong, setPlaySong] = useState(false);

  return (
    <>
      {playSong ? <WaveForm /> : null}
      <div className="audioPlayer">
        {/* <PlayPauseMenu /> */}
        {/* <div className="audioWaveform"></div> */}
        <div className="audioPlayerAlbumArt"></div>
        <div className="audioPlayerWrapper">
          <div className="audioPlayerInfoCard">
            <div className="audioPlayerSongInfo">
              <div className="audioPlayerSong">
                <p className="artist">{props.songName}</p>
                <p className="songName">{props.artistName}</p>
              </div>
              <div className="audioPlayerButtons">
                <div className="repostButton">
                  <i className="repostButtonIcon fa-solid fa-repeat"></i>
                  <p>repost</p>
                  <div className="artistCode">
                    <p>{props.artistTag}</p>
                  </div>
                </div>
              </div>
              <div className="audioPlayerTags">
                <p id="album">Album</p>
                <p id="tag">{props.songTag}</p>
              </div>
            </div>
          </div>
          <div className="audioPlayerSongDuration">
            <button type="button" onClick={() => setPlaySong(true)}>
              <i className="startDuration fa-solid fa-play"></i>
            </button>
            <hr />
            <p id="endDuration">{"3:23"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
