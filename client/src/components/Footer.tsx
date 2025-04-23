import { Link } from "react-router";
import logo from "../assets/images/logo-codexart-sans-bg.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <ul>
      <Link to="/" className="logoFooter">
        <img
          src={logo}
          alt="logo, forme géométrique avec l'inscription Codex Art."
        />
      </Link>
      <li>&copy; 2025 - Codex Art </li>
      <div>
        <li>Mentions légales</li> -{" "}
        <li>
          <Link to="https://www.economie.gouv.fr/politique-confidentialite">
            {" "}
            Politique de confidentialité
          </Link>
        </li>
      </div>
    </ul>
  );
}
