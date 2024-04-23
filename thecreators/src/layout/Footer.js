import Link from "next/link";
import Social from "./Social";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="left_part">
            <p>
              Copyright 2024 — Designed &amp; Developed by{" "}
              <a
                href="https://the-creators.xyz"
                target="_blank"
                rel="noreferrer"
              >
                TheCreators
              </a>
            </p>
          </div>
          <div className="right_part">
            <ul>
              <li>
                <Link href="/policy">
                  <a className="creative_link">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="creative_link">Cookies</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions">
                  <a className="creative_link">Terms &amp; Conditions</a>
                </Link>
              </li>
            <li>
            <div className="creative_link"><Social /></div>
            </li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <center>This website is open-source, and built on the <a href="https://guild.xyz/sdk" target="_blank" rel="noopener noreferrer">Guild SDK</a></center>
    </footer>

  );
};
export default Footer;
