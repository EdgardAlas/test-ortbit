import React from "react"

const TwoColumnSection = ({ children }) => {
  const isArray = Array.isArray(children)
  return (
    <section className="two-columns">
      <section>{isArray ? children[0] : children}</section>
      <section>{isArray && children[1]}</section>
    </section>
  )
}

export default TwoColumnSection
