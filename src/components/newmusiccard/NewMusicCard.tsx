import "./newmusiccard.css";
import img from "../../assets/albumarts/albumart6.jpg";

export default function NewMusicCard() {
  return (
    <div className="newMusicCard">
      <img src={img} alt="" className="newMusicAlbumArt" />
      <div className="newMusicInfo">
        <p id="newSongArtistName">Metallica</p>
        <p id="newSongName">Shadows Follow</p>
      </div>
    </div>
  );
}
