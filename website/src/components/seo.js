import * as React from "react"
import { Helmet } from "react-helmet"

const seoData = {
  "title": "Caleb Penley",
  "description": "Caleb Penley is a computer science student with a deep interest in researching and designing AI systems inspired by human cognition.",
  "author": "Caleb Penley",
  "siteUrl": "",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
     <Helmet>
    <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
    {/* Bootstrap Icons CDN */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
    />
     </Helmet>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="calebpenley.dev" />
    <meta name="twitter:card" content="Caleb Penley is a computer science student with a deep interest in researching and designing AI systems inspired by human cognition." />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo