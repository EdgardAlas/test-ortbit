import React from "react"
import classNames from "classnames"
import rocketJSON from "../images/52683-rocket.json"
import Lottie from "lottie-react"

const Button = ({
  children,
  blue = false,
  dark = false,
  darkBlue = false,
  orange = false,
  noIcon = false,
}) => {
  return (
    <button
      className={classNames("btn", {
        "btn--blue": blue,
        "btn--dark": dark,
        "btn--dark-blue": darkBlue,
        "btn--orange": orange,
      })}
    >
      {children}{" "}
      {!noIcon && (
        <Lottie
          animationData={rocketJSON}
          autoPlay
          loop
          style={{ width: 30 }}
        />
      )}
    </button>
  )
}

export default Button
