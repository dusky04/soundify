import { song } from "../../utilities/types";
import NewMusicCard from "../newmusiccard/NewMusicCard";
import { songList } from "../SongCardDisplayer/song_list";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sideBarWrapper">
      <div className="sideBarHeader">
        <p id="labelNewMusic">new music</p>
        <div className="sortButton">
          <p>Sort</p>
          <p>Popular & Newest</p>
        </div>
        <i className="fa-solid fa-arrow-up-wide-short"></i>
      </div>
      {songList.map((song) => (
        <NewMusicCard
          artistName={song.artistName}
          songName={song.songName}
          albumArtPath={song.albumArtPath}
          artistTag={song.artistTag}
          songTag={song.songTag}
        />
      ))}
    </div>
  );
}
