import "./App.css";
import SongCardDisplayer from "./components/SongCardDisplayer/SongCardDisplayer.tsx";
import BottomPlayer from "./components/bottomplayer/BottomPlayer.tsx";
import FeaturedArtist from "./components/featuredartist/FeaturedArtist.tsx";
import Logo from "./components/logo/Logo.tsx";
import NavBar from "./components/navbar/NavBar.tsx";
import NewMusicCard from "./components/newmusiccard/NewMusicCard.tsx";
import SearchBar from "./components/searchbar/SearchBar.tsx";
import SideBar from "./components/sidebar/SideBar.tsx";
import LoginPage from "./routes/loginPage/LoginPage.tsx";

function App() {
  return (
    <LoginPage />
    // <>
    //   <BottomPlayer />
    //   <main>
    //     <section className="leftSection">
    //       <Logo />
    //       <SideBar />
    //     </section>
    //     <section className="rightSection">
    //       <SearchBar />
    //       <FeaturedArtist />
    //       <NavBar />
    //       <SongCardDisplayer />
    //     </section>
    //   </main>
    // </>
  );
}

export default App;
