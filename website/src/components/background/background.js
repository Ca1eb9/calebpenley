import * as React from "react"


const backgroundData = {
  title: "Background",
  line1: "Currently attending The Pennsylvania State University pursuing a degree in computer science, I have a keen interest in the intersection between machine learning and neuroscience. I'm currently focused on experimenting with system and architectural design that more-closely mimic the efficient adaptability seen in biological neural networks.",
  line2: "Growing up in a small rural town in northwestern PA, I was surprisingly drawn to the complexity of computation, eventually teaching myself everything from basic mechanic and electronics to programming through raw reverse-engineering.",
  line3: "While expanding my knowledge and experimenting with digital systems design, I also enjoy learning about topics in practically any other field of study. When I’m not immersed in theory or coding a custom tool, I love reflecting on big questions, going on hikes, and socializing with friends and family."
};
const Background = () => (
  <section className="section background">
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
