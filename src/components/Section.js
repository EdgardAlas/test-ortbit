import classNames from "classnames"
import React from "react"

const Section = ({
  children,
  title,
  subtitle,
  titleOpacity = false,
  blue = false,
  darkBlue = false,
  dark = false,
  style = undefined,
  noPadding = false,
  orange = false,
  transparent = false,
  testHeight = false,
}) => {
  return (
    <article
      className={classNames("section", {
        "section--blue": blue,
        "section--dark": dark,
        "section--no-padding": noPadding,
        "section--transparent": transparent,
        "section--dark-blue": darkBlue,
        "section--orange": orange,
        "section--test-hight": testHeight,
      })}
      style={style}
    >
      {title && (
        <h3
          className={`section__title ${
            titleOpacity ? "section__title--opacity" : ""
          }`}
        >
          {title}
        </h3>
      )}
      {subtitle && <h4 className="section__subtitle">{subtitle}</h4>}
      <section className="section__content">{children}</section>
    </article>
  )
}

export default Section
