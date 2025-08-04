import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [{
  "name": "Llama Style Transfer",
  "url": "",
  "description": "A personal research project exploring fine-tuning of a 1B-parameter Llama model to perform writing style transfer across both several text domains and varied learning mechanisms.",
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
  "name": "Penley's Paintball Website",
  "url": "https://penleyspaintball.github.io",
  "description": "A clean, intuitive site designed to showcase pricing, events, and gallery for my dad’s local paintball business. <br> <a class='small' href=''>Source Code</a>",
  "used": [{
    "thing": "HTML5"
  }, {
    "thing": "JavaScript"
  }, {
    "thing": "MetaAPI"
  }]
}, {
  "name": "mdadm JBOD System",
  "url": "",
  "description": "Built a fail-safe storage management tool in C that simulates Linux’s mdadm, culminating in the implementation of a client-server protocol to execute JBOD operations over a networked environment.",
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
  "name": "Course Scheduler",
  "url": "",
  "description": "Designed a Java-based academic scheduling system using SQL, supporting dynamic student course enrollment and admin-level schedule control.",
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
  "name": "Showtime Display",
  "url": "https://silverstarcinemas.com",
  "description": "Developed a clean, intuitive web app for daily and weekly movie listings, backed by Firebase and Google Cloud functions for reliable schedule syncing. <br> <a class='small' href='https://github.com/Ca1eb9/CalebPenley-Portfolio/tree/main/Web%20Dev%20for%20Movie%20Theater'>Source Code </a>",
  "used": [{
    "thing": "HTML5"
  }, {
    "thing": "JavaScript"
  }, {
    "thing": "Firebase"
  }, {
    "thing": "Google Cloud"
  }, {
    "thing": "TMDB API"
  }]
}, {
  "name": "TinyLlama Reasoning",
  "url": "",
  "description": "Explored the capacity of a lightweight LLM (TinyLlama) to perform structured textual reasoning through simple deductive prediction.",
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
  "name": "VAE from Scratch",
  "url": "",
  "description": "Designed and implemented a modular Variational Autoencoder in PyTorch from scratch to explore generative modeling and latent space structure.",
  "used": [{
    "thing": "Python"
  }, {
    "thing": "Pytorch"
  }, {
    "thing": "HuggingFace"
  }, {
    "thing": "NumPy"
  }]
}, {
  "name": "Diffusion LoRA Training",
  "url": "",
  "description": "Implemented and trained Low-Rank Adaptation modules on a Flux.1 Dev to experiment with efficient model fine-tuning and performance improvements on domain-specific input.",
  "used": [{
    "thing": "Python"
  }, {
    "thing": "Pytorch"
  }, {
    "thing": "Diffusers"
  }, {
    "thing": "Flux.1 Dev"
  }, {
    "thing": "LoRA"
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
  </section>
)

export default FeaturedProjects
