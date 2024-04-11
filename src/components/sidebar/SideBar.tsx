import { song } from "../../utilities/types";
import NewMusicCard from "../newmusiccard/NewMusicCard";
import "./sidebar.css";

// const newSongs: song[] = [{songName:""}];

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
      {}
      <NewMusicCard />
      <NewMusicCard />
      <NewMusicCard />
      <NewMusicCard />
      <NewMusicCard />
    </div>
  );
}
