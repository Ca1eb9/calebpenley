import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [{
  "name": "LLaMA Style Transfer",
  "url": "https://github.com/Ca1eb9/portfolio/tree/main/coming-soon",
  "description": "A personal research project exploring fine-tuning of a 1B-parameter Llama model to perform textual style transfer using a limited dataset. Examined the effects that supervised fine-tuning (SFT) and input/output variations have on model quality and accuracy.",
  "used": [{
    "thing": "Python"
  }, {
    "thing": "Llama 3.2"
  }, {
    "thing": "Pytorch"
  }, {
    "thing": "HuggingFace"
  }, {
    "thing": "WandB"
  }]
}, {
  "name": "Custom mdadm RAID Utility",
  "url": "https://github.com/Ca1eb9/portfolio/tree/main/coming-soon",
  "description": "A mdadm-like tool in C for RAID management, focusing on fail-safe Just a Bunch of Disks (JBOD) operations through rigorous testing. Implemented a caching system to optimize I/O and socket-based communication for scalability and improved performance in a networked environment.",
  "used": [{
    "thing": "C"
  }, {
    "thing": "POSIX I/O"
  }, {
    "thing": "GDB"
  }, {
    "thing": "UNIX"
  }, {
    "thing": "Git"
  }]
}, {
  "name": "Variational Autoencoder (VAE)",
  "url": "https://github.com/Ca1eb9/portfolio/tree/main/coming-soon",
  "description": "A convolutional VAE in PyTorch from scratch to efficiently learn compressed representations from images. Trained on the CIFAR-10 dataset, optimizing for low reconstruction loss while achieving diverse generative sampling.",
  "used": [{
    "thing": "Python"
  }, {
    "thing": "Pytorch"
  }, {
    "thing": "HuggingFace"
  }]
}, {
  "name": "TinyLlama Reasoning",
  "url": "https://github.com/Ca1eb9/portfolio/tree/main/coming-soon",
  "description": "A personal project exploring the capacity of a lightweight LLM like TinyLlama to perform structured textual reasoning through deductive prediction.",
  "used": [{
    "thing": "Python"
  }, {
    "thing": "TinyLlama"
  }, {
    "thing": "Pytorch"
  }, {
    "thing": "Llama.cpp"
  }, {
    "thing": "WandB"
  }, {
    "thing": "PEFT/LoRA"
  }]
}, {
  "name": "Course Scheduler",
  "url": "https://github.com/Ca1eb9/portfolio/tree/main/coming-soon",
  "description": "A Java-based academic scheduling system using SQL, supporting dynamic student course enrollment and admin-level schedule control.",
  "used": [{
    "thing": "Java"
  }, {
    "thing": "SQL"
  }, {
    "thing": "JavaFX"
  }, {
    "thing": "JDBC"
  }]
}, {
  "name": "Diffusion LoRA Training",
  "url": "https://github.com/Ca1eb9/portfolio/tree/main/coming-soon",
  "description": "Implemented and trained Low-Rank Adaptation modules on a Flux.1 Dev to experiment with efficient model fine-tuning and performance improvements on domain-specific input.",
  "used": [{
    "thing": "Python"
  }, {
    "thing": "Pytorch"
  }, {
    "thing": "Diffusers"
  }, {
    "thing": "LoRA"
  }, {
   "thing": "Flux.1 Dev"
  }]
}, {
  "name": "Cinema Showtimes Display",
  "url": "https://silverstarcinemas.com",
  "description": "A dynamic movie listings web app using TMDB API for movie data, backed by Firebase and Google Cloud Platform (GCP) functions for reliable showtime access. <br> <a class='small' href='https://github.com/Ca1eb9/CalebPenley-Portfolio/tree/main/Web%20Dev%20for%20Movie%20Theater'>Source Code </a>",
  "used": [{
    "thing": "HTML"
  }, {
    "thing": "JavaScript"
  }, {
    "thing": "Firebase"
  }, {
    "thing": "GCP"
  }, {
    "thing": "TMDB API"
  }]
}, {
  "name": "Penley's Paintball Website",
  "url": "https://penleyspaintball.github.io",
  "description": "A simple yet clean and intuitive website designed to showcase pricing, events, and a gallery for my dad’s local paintball business.<br> <a class='small' target='_blank' rel='noreferrer' href='https://github.com/penleyspaintball/penleyspaintball.github.io'>Source Code</a>",
  "used": [{
    "thing": "HTML"
  }, {
    "thing": "JavaScript"
  }, {
    "thing": "MetaAPI"
  }]
}];

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
  </div>
    <div className="img_wrapper0">
      <img src="./images/binary3.png" className="img0"></img>
    </div>
    <div className="img_wrapper1">
      <img src="./images/cpu2.png" className="img1"></img>
    </div>
    
  </section>
)

export default FeaturedProjects
