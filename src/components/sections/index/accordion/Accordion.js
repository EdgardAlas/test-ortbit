import React from "react"
import { useState } from "react"

export const Accordion = ({ title, children, border }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section className={`acoordion ${border ? "acoordion--border" : ""}`}>
        <button onClick={() => setOpen(!open)} className="acoordion__button">
          {title}
          <i className={`fa-solid fa-circle-${!open ? "plus" : "minus"}`}></i>
        </button>
        <section
          className={`acoordion__content ${
            open ? "acoordion__content--show" : ""
          }`}
        >
          {children}
        </section>
      </section>
    </>
  )
}
