import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section id="projects" className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://github.com/Ca1eb9/portfolio/tree/main/coming-soon" rel="noreferrer" target="_blank">
            <img src="./images/featured/dashboard/frame.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/Ca1eb9/portfolio/tree/main/coming-soon" rel="noreferrer" target="_blank">Cinema Dashboard</a>
          </div>
          <p>A full-stack asynchronous dashboard with a TCP backend for live projector status and management. Secured by UUID-based authentication and automated email alerts for critical errors or projector failures.</p>
          <div className="project__used">
            <span className="project__used__item">Rust</span>
            <span className="project__used__item">Warp</span>
            <span className="project__used__item">Tokio</span>
            <span className="project__used__item">HTML</span>
            <span className="project__used__item">JavaScript</span>
            <span className="project__used__item">TCP</span>
            <span className="project__used__item">Security</span>
         </div>
        </figcaption>
        
      </div>
  

      <div className="project screentime">
        <figure className="project__pic phones">
          <a href="https://github.com/Ca1eb9/Maya" rel="noreferrer" target="_blank">
            <div className="maya">
              <img src="./images/featured/maya/phone_maya2.png" alt=""/>
            </div>
            
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://github.com/Ca1eb9/Maya" rel="noreferrer" target="_blank">Maya - An AI Assistant</a>
          </div>
          <p>Original AI assistant with a Flask REST API for CI/CD, media playback, and real-time weather updates. Scaled to support a server-client design using multi-threaded sockets, leveraging Microsoft Azure for speech recognition and synthesis.</p>
          <div className="project__used">
            <span className="project__used__item">Python</span>
            <span className="project__used__item">Azure</span>
            <span className="project__used__item">Docker</span>
            <span className="project__used__item">Flask</span>
            <span className="project__used__item">Tkinter</span>
            <span className="project__used__item">REST API</span>
            <span className="project__used__item">CI/CD</span>
            <span className="project__used__item">TCP</span>
         </div>
        </figcaption>
      </div>
    </div>
    <div className="img_wrap_f">
      <img src="./images/binary_half.png" className="img"></img>
    </div>
  </section>
)

export default FeaturedProjects
