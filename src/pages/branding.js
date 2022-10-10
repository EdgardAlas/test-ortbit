import React from "react"
import Layout from "../components/layout"
import Banner from "../components/sections/branding/Banner"
import BrandingIs from "../components/sections/branding/BrandingIs"
import FirstSection from "../components/sections/branding/FirstSection"
import Foto from "../components/sections/branding/Foto"
import FreeProposal from "../components/sections/branding/FreeProposal"
import Information from "../components/sections/branding/Information"
import SecondSection from "../components/sections/branding/SecondSection"
import Video from "../components/sections/branding/Video"
import Footer from "../components/ui/Footer"
import Header from "../components/ui/Header"

const BrandingPage = () => {
  return (
    <Layout title="Branding">
      <Header />
      <section className="sections">
        <Banner />
        <BrandingIs />
        <Foto />
        <FirstSection />
        <Video />
        <SecondSection />
        <FreeProposal />
        <Information />
      </section>
      <Footer />
    </Layout>
  )
}

export default BrandingPage
