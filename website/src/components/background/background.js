import * as React from "react"


const backgroundData = {
  title: "Background",
  line1: "Currently attending The Pennsylvania State University pursuing a degree in computer science, I have a keen interest in the intersection between machine learning and neuroscience. I'm currently focused on experimenting with system and architectural design that more-closely mimic the efficient adaptability seen in biological neural networks.",
  line2: "Growing up in a small rural town in northwestern PA, I was surprisingly drawn to the complexity of computation, eventually reverse-engineering everything from engines to computer motherboards.",
  line3: "While expanding my knowledge through experimentation, I have discovered I am fascinated by a variety of disciplines. When I’m not immersed in theory or coding a custom tool, I enjoy reflecting on life's big questions, going on hikes, and socializing with friends and family."
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
