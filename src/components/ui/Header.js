import React from "react"
import orbitwebLogo from "../../images/orbitweb-icon.webp"

const Header = () => {
  return (
    <header className="header">
      <img src={orbitwebLogo} alt="logo" width={200} className="header__logo" />
    </header>
  )
}

export default Header
