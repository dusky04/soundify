import "./audioplayer.css";
import "../../assets/fonts.css";
import { useState } from "react";
import WaveForm from "../waveform/WaveForm.tsx";
// import { useState } from "react";

// AudioPlayer Props
type audioPlayerProps = {
  songName: string;
  artistName: string;
  artistTag: string;
  songTag: string;
};

const AudioPlayer = (props: audioPlayerProps) => {
  const [playSong, setPlaySong] = useState(false);

  const AudioPlayerWrapper = (props: audioPlayerProps) => (
    <div
      className="audioPlayerWrapper"
      style={{ display: playSong ? "none" : "flex" }}
    >
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
  );

  return (
    <>
      <div className="audioPlayer">
        <div className="audioPlayerAlbumArt"></div>
        {playSong ? (
          <WaveForm />
        ) : (
          <AudioPlayerWrapper
            songName="Luna Nova"
            artistName="Eternal Embrace"
            artistTag="LUN"
            songTag="#Metalcore"
          />
        )}
      </div>
    </>
  );
};

export default AudioPlayer;
