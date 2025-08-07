import React, { useEffect, useRef } from "react"
import "./intro.scss" // optional external styles

const Sticky = () => {
  const imageRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const triggerPoint = 300

      if (imageRef.current) {
        if (scrollTop > triggerPoint) {
          imageRef.current.style.transform = "scale(1)"
          imageRef.current.style.opacity = "1"
        } else {
          const ratio = scrollTop / triggerPoint
          imageRef.current.style.transform = `scale(${0.8 + ratio * 0.2})`
          imageRef.current.style.opacity = `${ratio}`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <img
        ref={imageRef}
        src="./images/ai.png"
        alt="Sticky"
        className="img1"
      /> 
  )
}

export default Sticky