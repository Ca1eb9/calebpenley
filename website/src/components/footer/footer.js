import * as React from "react"
import "./footer.scss"

const socialData = [{
  "title": "email",
  "url": "mailto:penleyc@icloud.com"
}, {
  "title": "github",
  "url": "https://github.com/ca1eb9"
}, {
  "title": "linkedin",
  "url": "https://www.linkedin.com/in/calebpenley/"
}];
const Footer = () => (
  <footer className="footer">
    <div className="footer1">
      <div className="footer1__copyright">
        <div className="bottom credits">
          <small>
            Template by <a href="https://github.com/skavinvarnan/kavin.varnan.me" rel="noreferrer" target="_blank"> Kavin Varnin</a>
          </small>
        </div>
      </div>
      <div className="footer1__links">
        {
          socialData.map((social) => (
            <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
              <span className="text">{social.title}</span>
            </a>
          ))
        }
      </div>
    </div>
    

    <div className="footer__name">
      Caleb Penley | 2025
    </div>
  </footer>
)

export default Footer
