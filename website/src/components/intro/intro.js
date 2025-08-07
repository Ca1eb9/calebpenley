import * as React from "react"
import "./intro.scss"


const introData = {
  title: "Hello!",
  beforeName: "I'm ",
  name: "Caleb Penley",
  afterName: "a computer science student with a deep interest in researching and designing AI systems inspired by human cognition.",
  contact: "Get in touch: ",
  email: "penleyc@icloud.com",
  mailTo: "mailto:penleyc@icloud.com"
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  return <header className="intro">
    <h1 className="intro__hello">{introData.title}</h1>

    <h2 className="intro__tagline">{introData.beforeName}
      <span className="name">{introData.name}</span>,<br></br>{introData.afterName}
    </h2>

    <h3 className="intro__contact">
      <span>{introData.contact}</span>
      <span className="emoji pointer"></span>
      <span>
      <a href={introData.mailTo}
         className="highlight-link">{introData.email}</a>
    </span>
    <br/>
    <div className="icon-boxs">
      <div className="icon-box">
      <a href="https://linkedin.com/in/calebpenley" target="_blank" rel="noreferrer" className="intro__icon">
      <i class="bi bi-linkedin"></i>
    </a>
    </div>
    <div className="icon-box">
      <a href="https://github.com/ca1eb9" target="_blank" rel="noreferrer" className="intro__icon">
      <i class="bi bi-github"></i>
    </a>
    </div>
    </div>
    
    </h3>
    <img src="./images/ai.png" className="intro__img"></img>
  </header>
};

export default Intro
