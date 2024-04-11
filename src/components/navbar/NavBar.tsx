import "./navbar.css";
import { GridIcon } from "../../assets/svgs/Svgs.tsx";

const navBarLinks: string[] = [
  "Newest",
  "Popular",
  "Featuring",
  "Single track",
  "Albums",
];

export default function NavBar() {
  return (
    <div className="navBarWrapper">
      {navBarLinks.map((navBarLink) => (
        <a href="#" className="navBarLinks" key={navBarLink}>
          {navBarLink}
        </a>
      ))}
      <div className="gridIcon">
        <GridIcon />
      </div>
    </div>
  );
}
