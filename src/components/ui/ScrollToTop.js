import React, { useEffect, useState } from "react"

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  const showButton = () => {
    if (window.scrollY >= 100) {
      return setShow(true)
    }
    setShow(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", showButton)
    return () => {
      window.removeEventListener("scroll", showButton)
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return show ? (
    <button className="btn-scroll-top" onClick={scrollTop}>
      <i className="fa-solid fa-arrow-up iconScrollUp"></i>
    </button>
  ) : (
    ""
  )
}

export default ScrollToTop
