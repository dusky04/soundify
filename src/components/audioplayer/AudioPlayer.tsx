import "./audioplayer.css";
import "../../assets/fonts.css";
import { useEffect, useState } from "react";
import WaveForm from "../waveform/WaveForm.tsx";
import type { song } from "../../utilities/types.ts";

const AudioPlayer = (props: song) => {
  const [playSong, setPlaySong] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const AudioPlayerWrapper = (props: song) => (
    <div
      className="audioPlayerWrapper"
      style={{ display: playSong ? "none" : "flex" }}
    >
      <div className="audioPlayerInfoCard">
        <div className="audioPlayerSongInfo">
          <div className="audioPlayerSong">
            <p className="artist">{props.artistName}</p>
            <p className="songName">{props.songName}</p>
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
  return isLoaded ? (
    <>
      <section>
        <img src={props.albumArtPath.split("_blur")[0] + ".jpg"} alt="" />

        <div className="audioPlayer">
          <div
            className="audioPlayerAlbumArt"
            // style={{ background: `url("${props.albumArtPath}")` }}
            style={{
              backgroundImage: `url(${props.albumArtPath}`,
            }}
          ></div>
          {playSong ? (
            <WaveForm />
          ) : (
            <AudioPlayerWrapper
              key={props.artistName}
              songName={props.songName}
              artistName={props.artistName}
              artistTag={props.artistTag}
              songTag={props.songTag}
              albumArtPath={props.albumArtPath}
            />
          )}
        </div>
      </section>
    </>
  ) : null;
};

export default AudioPlayer;
