import SongCardDisplayer from "../../components/SongCardDisplayer/SongCardDisplayer";
import BottomPlayer from "../../components/bottomplayer/BottomPlayer";
import FeaturedArtist from "../../components/featuredartist/FeaturedArtist";
import Logo from "../../components/logo/Logo";
import NavBar from "../../components/navbar/NavBar";
import SearchBar from "../../components/searchbar/SearchBar";
import SideBar from "../../components/sidebar/SideBar";
import musicPlayerPageStyles from "./music-player-page.module.css";

export default function MusicPlayer() {
  return (
    <>
      <BottomPlayer />
      <main className={musicPlayerPageStyles.main}>
        <section className={musicPlayerPageStyles.leftSection}>
          <Logo />
          <SideBar />
        </section>
        <section className={musicPlayerPageStyles.rightSection}>
          <SearchBar />
          <FeaturedArtist />
          <NavBar />
          <SongCardDisplayer />
        </section>
      </main>
    </>
  );
}
