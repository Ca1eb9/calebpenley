import * as React from "react"

const seoData = {
  "title": "Caleb Penley",
  "description": "Caleb Penley is a computer science student with a deep interest in researching and designing AI systems inspired by human cognition.",
  "author": "Caleb Penley",
  "siteUrl": "",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
