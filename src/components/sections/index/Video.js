import React from "react"
import Section from "../../Section"

const Video = () => {
  return (
    <Section>
      <section className="video-section">
        <section>
          <h3
            className="section__subtitle"
            style={{
              textAlign: "left",
            }}
          >
            Desing & Development
          </h3>
          <p>
            We can enable your business to sell your products or services to
            people all over the world! When we build an eCommerce solution, we
            combine good design, data analysis, and creativity to help your
            products or services be found, shared, and purchased as easy as
            possible over the internet.
          </p>
          <p>
            eCommerce may seem like a crowded market, but it's still a growing
            field, hitting an increasing share in the global shopping market
            every year, so it's never too late to hop in!
          </p>
        </section>
        <section className="video-section__video">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/P7UqfbKQJi8"
            title="Make money online with eCommerce |  Online Business"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </section>
    </Section>
  )
}

export default Video
