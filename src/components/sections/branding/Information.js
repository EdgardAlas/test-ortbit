import React, { useEffect } from "react"
import Section from "../../Section"
import TwoColumnSection from "../../TwoColumnSection"
import check from "../../../images/check-icon.webp"
import mail from "../../../images/mail.webp"
import call from "../../../images/call.webp"
import aos from "aos"
import "aos/dist/aos.css"
import Button from "../../Button"
const items1 = ["Search Ads", "Display Ads", "Shopping Ads", "Youtube Ads"]
const items2 = [
  "Google Analytics",
  "Google Tags",
  "Website Optimization",
  "Remarketing",
]

const Information = () => {
  useEffect(() => {
    aos.init({ duration: 3000 })
  }, [])

  return (
    <Section>
      <TwoColumnSection>
        <section>
          <p style={{ margin: 0 }}>
            Are you currently running Google Ads, but not sure if you’re
            targeting the best keywords or the right audience? Or maybe Google
            Ads are already working for you, but you know you can do better.
          </p>
          <p>
            Are you afraid that if you make changes to your campaign you’ll do
            something wrong? Would you like to increase your ROI, but you’re
            getting baffled by Google Ads complexity and struggling to get
            consistent results?
          </p>
          <p>
            If you’re already using Google Ads, our team will get together and
            take a look to see how your campaigns are doing – what your results
            have been and will talk to you about what kinds of opportunities
            there are for improvement. – All this FREE of charge!
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
            <Button orange noIcon>
              GET A FREE GOOGLE ADS ASSESSMENT
            </Button>
          </section>
        </section>
      </TwoColumnSection>
      <section className="information-options">
        <h3>You have other questions?</h3>
        <p>If you require any further information, feel free to contact us?</p>
        <article className="contact-options">
          <section>
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                justifyContent: "start",
              }}
            >
              <img src={mail} alt="mails" height={20} />
              EMAIL
            </h5>
            <section className="information-options__emails">
              <a href="mailto:info@orbitweb.ca">info@orbitweb.ca</a>
              <a href="mailto:support@orbitweb.ca">support@orbitweb.ca</a>
            </section>
          </section>

          <section>
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                justifyContent: "start",
              }}
            >
              <img src={call} alt="mails" height={20} />
              OR CALL US:
            </h5>
            <a href="tel:+18004306414">+ 1 (800) 430-6414</a>
            <section className="links-sections" style={{ marginTop: "1rem" }}>
              <a
                href="/"
                style={{
                  color: "#3b5998",
                }}
              >
                <i className="fa-brands fa-linkedin links"></i>
              </a>
              <a
                href="/"
                style={{
                  color: "#0e76a8 ",
                }}
              >
                <i className="fa-brands fa-facebook links"></i>
              </a>
            </section>
          </section>
        </article>
      </section>
    </Section>
  )
}

export default Information
