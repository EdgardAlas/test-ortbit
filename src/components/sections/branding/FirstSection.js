import React from "react"
import Section from "../../Section"
import TwoColumnSection from "../../TwoColumnSection"

const FirstSection = () => {
  return (
    <Section>
      <TwoColumnSection>
        <section>
          <h3>Lorem Ipsum</h3>
          <div className="box"></div>
        </section>
        <section>
          <h3 style={{ opacity: 0 }}>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            aliquet massa, maximus luctus ex. Mauris mattis nisl sed diam
            suscipit venenatis. Aliquam erat volutpat. Aenean lacinia nibh nibh,
            nec gravida tellus faucibus id. Morbi quis ligula eget lectus
            consectetur condimentum. Vivamus rutrum neque id suscipit pharetra.
            Ut accumsan ac mauris id consequat. Etiam commodo, nisi eget finibus
            tristique, nisl dolor malesuada massa, quis hendrerit tortor mi in
            lorem. Donec ipsum sapien, blandit et justo at, viverra bibendum
            metus. Nam nisi purus, accumsan sed euismod eu, egestas a urna.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Nullam accumsan mi in lorem faucibus
            sagittis. Nam ac dapibus metus.
          </p>
        </section>
      </TwoColumnSection>
    </Section>
  )
}

export default FirstSection
