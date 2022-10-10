import React from "react"
import Section from "../../Section"
import { Accordion } from "../index/accordion/Accordion"

const AccordionList = () => {
  return (
    <Section>
      <section className="accordion-section">
        <ul className="accordion__list">
          <li>
            <Accordion title={"Coming soon"}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                amet aperiam est quisquam ratione distinctio, nisi sunt eos?
                Delectus, animi quo. Qui expedita ipsum corrupti ipsa suscipit,
                maxime quae velit!
              </p>
            </Accordion>
          </li>
          <li>
            <Accordion title={"Coming soon"}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                amet aperiam est quisquam ratione distinctio, nisi sunt eos?
                Delectus, animi quo. Qui expedita ipsum corrupti ipsa suscipit,
                maxime quae velit!
              </p>
            </Accordion>
          </li>
          <li>
            <Accordion title={"Lorem ipsum dolor sit amet"}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                amet aperiam est quisquam ratione distinctio, nisi sunt eos?
                Delectus, animi quo. Qui expedita ipsum corrupti ipsa suscipit,
                maxime quae velit!
              </p>
            </Accordion>
          </li>
        </ul>
        <section>
          <Accordion title={"Coming soon"} border>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet
              aperiam est quisquam ratione distinctio, nisi sunt eos? Delectus,
              animi quo. Qui expedita ipsum corrupti ipsa suscipit, maxime quae
              velit!
            </p>
          </Accordion>
        </section>
      </section>
    </Section>
  )
}

export default AccordionList
