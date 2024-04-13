import "./newmusiccard.css";
import type { song } from "../../utilities/types";

export default function NewMusicCard(props: song) {
  return (
    <div className="newMusicCard">
      <img
        src={props.albumArtPath.split("_blur")[0] + ".jpg"}
        alt=""
        className="newMusicAlbumArt"
      />
      <div className="newMusicInfo">
        <p id="newSongArtistName">{props.artistName}</p>
        <p id="newSongName">{props.songName}</p>
      </div>
    </div>
  );
}
