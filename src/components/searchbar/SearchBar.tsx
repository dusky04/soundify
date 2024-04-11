import "./searchbar.css";
import profilePhoto from "../../assets/pp.jpg";

export default function SearchBar() {
  return (
    <div className="searchBarContainer">
      <div className="searchBarWrapper">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" className="searchBar" placeholder="Search" />
      </div>
      <img src={profilePhoto} alt="" className="profilePhoto" />
    </div>
  );
}
