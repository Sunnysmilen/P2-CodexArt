import { Link } from "react-router";
import logo from "../assets/images/logo-codexart-sans-bg.png";
import "../styles/footer.css";

export default function Footer() {
    return (
        <footer>
            <Link to="/" className="logoFooter">
                <img src={logo} alt="logo, forme géométrique avec l'inscription Codex Art." />
            </Link>
            <p>&copy; 2025 - Codex Art </p>
            <div>
                <span>Mentions légales</span> -
                <span>
                    <Link to="https://www.economie.gouv.fr/politique-confidentialite">
                        Politique de confidentialité
                    </Link>
                </span>
            </div>
        </footer>
    );
}
