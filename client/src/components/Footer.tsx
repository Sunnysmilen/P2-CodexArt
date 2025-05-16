import { Link } from "react-router";
import logo from "../assets/images/logo-codexart-sans-bg.png";
import "../styles/footer.css";
import { useTranslation } from "../contexts/LocaleContext";

export default function Footer() {
  const { translations } = useTranslation();
  return (
    <footer>
      <Link to="/" className="logoFooter">
        <img
          src={logo}
          alt="logo, forme géométrique avec l'inscription Codex Art."
        />
      </Link>
      <p>&copy; 2025 - Codex Art </p>
      <div>
        <p>{translations.footer.mentions_légales}</p> -
        <Link to="https://www.economie.gouv.fr/politique-confidentialite">
          {translations.footer.politique_de_confidentialité}
        </Link>
      </div>
    </footer>
  );
}
