import React from "react"
import Section from "../../Section"

const items1 = [
  "Keyword Optimized website",
  "Website optimized for performance",
  "Markup data on your Website",
]

const items2 = [
  "Maps, Directions & Business Hours",
  "Local Directory Listings",
  "Google My Business",
]

const VoiceSearchSeo = () => {
  return (
    <Section title="Voice Search SEO" subtitle="Include" titleOpacity>
      <section
        className="section__list-section"
        style={{ marginTop: "3rem", marginBottom: "3rem" }}
      >
        <ul className="list">
          {items1.map((value, index) => (
            <li key={index}>
              <i className="fa-solid fa-circle-check light-blue"></i>
              <span>{` ${value}`}</span>
            </li>
          ))}
        </ul>
        <ul className="list">
          {items2.map((value, index) => (
            <li key={index}>
              <i className="fa-solid fa-circle-check light-blue"></i>
              <span>{` ${value}`}</span>
            </li>
          ))}
        </ul>
      </section>
      <p>
        We develop and execute high-quality voice search optimization and
        marketing strategies for your brand.
      </p>
      <p>
        Our team at Orbitweb are voice search experts that use voice
        optimization processes to develop voice search solutions that deliver
        accurate results with your target audience, brand, and goals in goals in
        mind.
      </p>
      <p>
        A lot of time and effort goes into building a proper SEO campaign. Our
        SEO offering is a highly technical one time optimization that will
        improve the ranking for your focus keywords on local search results.
        Considering leveraging SEO for your business? Our team is passionate
        about building our clients the best SEO strategy possible.
      </p>
    </Section>
  )
}

export default VoiceSearchSeo
