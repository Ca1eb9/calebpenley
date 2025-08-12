import * as React from "react"

import Seo from "../components/seo"
import Intro from "../components/intro/intro";
import "../scss/base.scss"
import "../scss/fonts.scss"
import Background from "../components/background/background";
import Skills from "../components/skills/skills";
import Experience from "../components/experience/experience";
import FeaturedProjects from "../components/featured-projects/featured-projects";
import OtherProjects from "../components/other-projects/other-projects";
import Footer from "../components/footer/footer";
import Scroll from "../components/scroll";
import Navbar from "../components/navbar/navbar"

const IndexPage = () => (
  <>
    <Scroll />
    <Seo/>
    <Navbar />
    <Intro />
    <Background />
    <Skills />
    <Experience />
    <FeaturedProjects />
    <OtherProjects />
    <Footer />
  </>
  
)

export default IndexPage
