import * as React from "react"
import "./footer.scss"

const socialData = [{
  "title": "email",
  "url": "mailto:penleyc@icloud.com"
}, {
  "title": "linkedin",
  "url": "https://www.linkedin.com/in/calebpenley/"
}, {
  "title": "github",
  "url": "https://github.com/ca1eb9"

}];
const Footer = () => (
  <footer className="footer">
    <div className="footer1">
      <div className="footer2">
        <img src="./images/portrait.png" className="portrait"></img>
      <div className="footer2__links">
        {
          socialData.map((social) => (
            <a href={social.url} target="_blank" rel="noreferrer" title={social.title}>
              <span className="text">{social.title}</span>
            </a>
          ))
        }
      </div>
      </div>
    </div>

    <div className="footer__name">
      Caleb Penley | 2025
    </div>
  </footer>
)

export default Footer
