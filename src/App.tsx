import "./App.css";
import SongCardDisplayer from "./components/SongCardDisplayer/SongCardDisplayer.tsx";
import FeaturedArtist from "./components/featuredartist/FeaturedArtist.tsx";
import NavBar from "./components/navbar/NavBar.tsx";
import SearchBar from "./components/searchbar/SearchBar.tsx";

function App() {
  return (
    <main>
      <section className="leftSection"></section>
      <section className="rightSection">
        <SearchBar />
        <FeaturedArtist />
        <NavBar />
        <SongCardDisplayer />
      </section>
    </main>
  );
}

export default App;
