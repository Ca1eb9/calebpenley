import * as React from "react"


const backgroundData = {
  title: "Background",
  line1: "Currently attending The Pennsylvania State University, pursuing degrees in Computer Science and Psychology, I have a keen interest in the intersection between machine learning and computational neuroscience, specifically cognitive science. I'm currently interested in using neural systems to inform AI architecture and applying computational modeling to understand cognition and behavior.",
  line2: "Growing up in a small rural town in northwestern PA, I was surprisingly drawn to the complexity of computation, eventually reverse-engineering everything from engines to computer motherboards. While expanding my knowledge through experimentation, I have discovered I am fascinated by a variety of disciplines.",
  line3: "When I’m not immersed in theory or coding a custom tool, I enjoy reflecting on life's big questions, going on hikes, and socializing with friends and family."
};
const Background = () => (
  <section id="background" className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
       {backgroundData.line1}
      </p>
      <p>
        {backgroundData.line2}
      </p>
      <p>
        {backgroundData.line3}
      </p>
    </div>
  </section>
)

export default Background
