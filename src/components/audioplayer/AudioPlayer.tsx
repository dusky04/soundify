import "./audioplayer.css";
import "../../assets/fonts.css";
// import "../waveform/WaveForm.js";
// import PlayPauseMenu from "../playpausemenu/PlayPauseMenu";

const AudioPlayer = () => {
  return (
    <div className="audioPlayer">
      {/* <PlayPauseMenu /> */}
      {/* <div className="audioWaveform"></div> */}
      <div className="audioPlayerAlbumArt"></div>
      <div className="audioPlayerWrapper">
        <div className="audioPlayerInfoCard">
          <div className="audioPlayerSongInfo">
            <div className="audioPlayerSong">
              <p className="artist">Luna Nova</p>
              <p className="songName">Eternal Embrace</p>
            </div>
            <div className="audioPlayerButtons">
              <div className="repostButton">
                <i className="repostButtonIcon fa-solid fa-repeat"></i>
                <p>repost</p>
                <div className="artistCode">
                  <p>LUN</p>
                </div>
              </div>
            </div>
            <div className="audioPlayerTags">
              <p id="album">Album</p>
              <p id="tag">#Metalcore</p>
            </div>
          </div>
        </div>
        <div className="audioPlayerSongDuration">
          <p id="startDuration">0:00</p>
          <p id="endDuration">{}</p>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
