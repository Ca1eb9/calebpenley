import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="" rel="noreferrer" target="_blank">
            <img src="./images/featured/dashboard/frame.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="" rel="noreferrer" target="_blank">Projector Dashboard</a>
          </div>
          <p>A full-stack projector management dashboard browser-app with UUID-secured authentication and automated email alerts for critical errors.</p>
          <div className="project__used">
            <span className="project__used__item">Rust</span>
            <span className="project__used__item">Warp</span>
            <span className="project__used__item">Tokio</span>
            <span className="project__used__item">HTML5</span>
            <span className="project__used__item">JavaScript</span>
            <span className="project__used__item">Networking</span>
            <span className="project__used__item">Security</span>
         </div>
        </figcaption>
        
      </div>
  

      <div className="project screentime">
        <figure className="project__pic phones">
          <a href="https://github.com/Ca1eb9/Maya" rel="noreferrer" target="_blank">
            <div className="maya">
              <img src="./images/featured/maya/phone_maya.png" alt=""/>
            </div>
            
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/Ca1eb9/Maya" rel="noreferrer" target="_blank">Maya - An AI Assistant</a>
          </div>
          <p>Maya is my first attempt to develop an original client-server based AI assistant similar to Amazon Alexa or Google Home.</p>
          <div className="project__used">
            <span className="project__used__item">Python</span>
            <span className="project__used__item">Azure</span>
            <span className="project__used__item">Docker</span>
            <span className="project__used__item">Flask</span>
            <span className="project__used__item">Tkinter</span>
            <span className="project__used__item">REST API</span>
            <span className="project__used__item">CI/CD</span>
         </div>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
