import React from "react"
import Button from "../../Button"
import Section from "../../Section"
import phone from "../../../images/phone.webp"

const VoiceSeo = () => {
  return (
    <Section titleOpacity>
      <article className="section__cols">
        <section>
          <h3 className="section__title section__title--opacity">Voice SEO</h3>
          <h4 className="section__subtitle">Voice Search SEO</h4>
          <p>
            With the growing presence of digital personal assistants and home
            devices, voice search is predicted to encompass 50% searches in
            2020. Have you set up your Voice Search SEO strategy for your brand?
          </p>
          <p>
            If you want your target audience to find you, regardless of the
            device they use, you need to optimize your brand for a world where
            voice is the new norm. You need voice search SEO for your brand that
            covers: voice search strategy and planning, keywords research and
            analysis, content and code optimization, load time optimization, and
            everything else that gets you found through voice search.
          </p>
        </section>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <img
            src={phone}
            alt="phone"
            style={{ width: "100%" }}
            className="section__img"
          />
          <Button>Get in touch</Button>
        </section>
      </article>
    </Section>
  )
}

export default VoiceSeo
