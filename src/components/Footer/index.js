import { useI18n } from "../../utils/i18n";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/contact" className="footer-link">
            {t("footer_contact")}
          </Link>
          <Link to="/imprint" className="footer-link">
            {t("footer_imprint")}
          </Link>
          <Link to="/privacy" className="footer-link">
            {t("footer_privacy")}
          </Link>
        </div>
        <div className="footer-section">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Nazrullah Rezai. {t("footer_copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
