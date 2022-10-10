import React from "react"
import Section from "../../Section"

import wismo from "../../../images/wismo-lan-logo-white.webp"
import comunity from "../../../images/your-community-realty-white-logo.webp"
import cmi from "../../../images/cmi.webp"
import quantum from "../../../images/quantum.webp"
import rooster from "../../../images/rooster.webp"
import clearly from "../../../images/clearly.webp"
import golden from "../../../images/golden.webp"
import investment from "../../../images/investment.webp"

const Clients = () => {
  return (
    <Section title="Clients we work with" blue>
      <section className="clients">
        <img src={wismo} alt="wismo" />
        <img src={comunity} alt="wismo" />
        <img src={cmi} alt="wismo" />
        <img src={quantum} alt="wismo" />
        <img src={rooster} alt="wismo" />
        <img src={clearly} alt="wismo" />
        <img src={golden} alt="wismo" />
        <img src={investment} alt="wismo" />
      </section>
    </Section>
  )
}

export default Clients
