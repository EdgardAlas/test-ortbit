import React from "react"
import Section from "../../Section"
import mail from "../../../images/mail.webp"
import call from "../../../images/call.webp"

const Contact = () => {
  return (
    <Section subtitle={"Do you have any questions?"}>
      <p
        style={{
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        If you require any further information, feel free to contact us
      </p>
      <article className="contact-options">
        <section>
          <h5
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            <img src={mail} alt="mails" height={20} />
            EMAIL
          </h5>
          <section className="contact-options__emails">
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
              justifyContent: "center",
            }}
          >
            <img src={call} alt="mails" height={20} />
            OR CALL US:
          </h5>
          <a href="tel:+18004306414">+ 1 (800) 430-6414</a>
          <section className="links-sections">
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
    </Section>
  )
}

export default Contact
