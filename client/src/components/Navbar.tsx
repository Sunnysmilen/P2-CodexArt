import { NavLink } from "react-router";
import logo from "../assets/images/logo-codexart-sans-bg.png";
import "../styles/Navbar.css";
import imageGb from "../assets/images/anglais.png";
import imageEs from "../assets/images/espagnol.png";
import imageFr from "../assets/images/france.png";
import { useTranslation } from "../contexts/LocaleContext";

export function Navbar() {
  const { testLanguage, translations } = useTranslation();
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img className="Logo" src={logo} alt="Logo Codex Art" />
      </NavLink>
      <span className="navlinks">
        <NavLink to="/">{translations.navbar.home} </NavLink>|
        <NavLink to="/Galerie">{translations.navbar.gallery} </NavLink>|
        <NavLink to="/Musees">{translations.navbar.museums} </NavLink>|
        <NavLink to="Contact">{translations.navbar.contact} </NavLink>
      </span>
      <div className="world">
        <button type="button" onClick={() => testLanguage("fr")}>
          <img src={imageFr} alt="drapeaux francais" />
        </button>
        <button type="button" onClick={() => testLanguage("en")}>
          <img src={imageGb} alt="drapeau anglais" />
        </button>
        <button type="button" onClick={() => testLanguage("es")}>
          <img src={imageEs} alt="drapeau espagnol" />
        </button>
      </div>
    </nav>
  );
}
