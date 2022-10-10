import React from "react"
import astroVoice from "../../../images/Astro-voice.webp"
const Banner = () => {
  return (
    <section className="banner">
      <section className="banner__title-section">
        <h1 className="banner__title">Voice Search SEO</h1>
        <h2 className="banner__subtitle">Digital Marketing Solutions</h2>
      </section>
      <img src={astroVoice} alt="Astro voice" className="banner__img" />
    </section>
  )
}

export default Banner
