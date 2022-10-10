import React from "react"
import Layout from "../components/layout"
import About from "../components/sections/index/About"
import AccordionList from "../components/sections/index/AccordionList"
import Clients from "../components/sections/index/Clients"
import Contact from "../components/sections/index/Contact"
import GrowYoutBusiness from "../components/sections/index/GrowYoutBusiness"
import Map from "../components/sections/index/Map"
import Slider from "../components/sections/index/Slider"
import Video from "../components/sections/index/Video"
import VoiceSearchSeo from "../components/sections/index/VoiceSearchSeo"
import VoiceSeo from "../components/sections/index/VoiceSeo"
import Banner from "../components/sections/index/Banner"
import Footer from "../components/ui/Footer"
import Header from "../components/ui/Header"

const IndexPage = () => (
  <Layout title={"Inicio"}>
    <Header />
    <Banner />
    <section className="sections">
      <VoiceSeo />
      <GrowYoutBusiness />
      <VoiceSearchSeo />
      <About />
      <Clients />
      <Contact />
      <Slider />
      <AccordionList />
      <Video />
      <Map />
    </section>
    <Footer />
  </Layout>
)

export default IndexPage
