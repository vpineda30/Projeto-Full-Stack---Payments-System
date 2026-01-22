import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaGooglePlusG /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      <ul className="footer-links">
        <li><Link to={""}>Home</Link></li>
        <li><Link to={""}>About</Link></li>
        <li><Link to={""}>Contact us</Link></li>
      </ul>

      <div className="footer-bottom">
        <p>Copyright © 2025 | Designed by Vinícius Pineda</p>
      </div>
    </footer>
  );
};