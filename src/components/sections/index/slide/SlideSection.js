import React from "react"
import Section from "../../../Section"

const SlideSection = ({ title, img, children }) => {
  return (
    <Section style={{ paddingLeft: "0", paddingRight: 0 }}>
      <header>
        <img src={img} width={40} height={47} alt="img" />
        <h3>{title}</h3>
      </header>
      {children}
    </Section>
  )
}

export default SlideSection
