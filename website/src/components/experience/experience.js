import * as React from "react"
import "./experience.scss"


const experienceData = [{
  "company": "Assistant Manager / Technical Lead",
  "url": "https://silverstarcinemas.com/",
  "time": "May 2024 - Present",
  "position": "Silver Star Cinemas"
}, {
  "company": "Vice President",
  "url": "",
  "time": "Dec 2024 - Sep 2025",
  "position": "Delta Phi, Psi Chapter"
}];

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>
      <a href="./PENLEY_CALEB_RESUME.pdf" target="_blank" rel="noreferrer" className="arrow-link">View My Resume</a>
    </div>
  </section>
)

export default Experience
