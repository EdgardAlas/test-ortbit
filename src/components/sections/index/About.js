import React, { useEffect } from "react"
import Section from "../../Section"
import check from "../../../images/check-icon.webp"
import Button from "../../Button"
import aos from "aos"
import "aos/dist/aos.css"
const items1 = ["Search Ads", "Display Ads", "Shopping Ads", "Youtube Ads"]

const items2 = [
  "Google Analytics",
  "Google Tags",
  "Website Optimization",
  "Remarketing",
]

const About = () => {
  useEffect(() => {
    aos.init({ duration: 3000 })
  }, [])

  return (
    <Section titleOpacity>
      <section className="section__about-cols">
        <section>
          <p>
            OrbitWeb was established in 2017, offering professional website
            development, and advertising campaigns on the most popular
            platforms. The websites we develop are customized for your unique
            brand and online presence. All our websites are backed with a
            powerful content management system, search engine optimization, and
            a modern mobile-friendly design. Let’s start building a great
            website, one that generates traffic, leads, and conversions. We are
            the best digital partner to have on your side!
          </p>
          <p>
            Are you currently running Google Ads but not sure if you're
            targeting the best keywords or the right audience?
          </p>
          <p>
            Maybe Google Ads are already working for you, but you know you can
            do better.
          </p>
        </section>
        <section className="section__list-section-about">
          <section className="section__lists-about" data-aos="fade-right">
            <ul className="list-about">
              {items1.map((value, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img src={check} alt="check" width={30} />
                  <span>{` ${value}`}</span>
                </li>
              ))}
            </ul>
            <ul className="list-about">
              {items2.map((value, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <img src={check} alt="check" width={30} />
                  <span>{` ${value}`}</span>
                </li>
              ))}
            </ul>
          </section>
          <section style={{ textAlign: "center" }}>
            <Button>Get in touch</Button>
          </section>
        </section>
      </section>
    </Section>
  )
}

export default About
