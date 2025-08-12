import * as React from "react"
import "./switch.scss"

const Switch = () => {
  
  const [isChecked, setIsChecked] = React.useState(true);
  
  React.useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    setIsChecked(savedMode !== null ? JSON.parse(savedMode) : prefersDarkMode);
  }, []);

  const toggleSwitch = () => {
    const newChecked = !isChecked;
    console.log("hello")
    setIsChecked(newChecked);
    localStorage.setItem('darkMode', JSON.stringify(newChecked));
  };

  React.useEffect(() => {
    console.log("hello")
    if (isChecked) {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }
  }, [isChecked]);

  return <div className="switch-wrapper">
    <div className="sun"></div>
    <div className="toggle-wrapper">
      <input id="switch" type="checkbox" onChange={toggleSwitch} checked={isChecked}/>
      <label htmlFor="switch" id="toggle">Toggle</label>
    </div>
    <div className="moon"></div>
  </div>
}

export default Switch
