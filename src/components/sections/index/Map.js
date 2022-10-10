import React from "react"
import Section from "../../Section"
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

const center = {
  lat: 43.65742690276302,
  lng: -79.60345796828449,
}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBe0_sNZlFmz_PifpCLuqp8J62aA8xs-Ks",
  })

  return (
    <Section dark>
      <section className="section__map-useful-liks">
        {isLoaded ? (
          <section>
            <h3>Headquarters</h3>
            <p style={{ padding: 0, margin: 0, marginBottom: "1rem" }}>
              2425 Matheson Blvd E #8th, Mississauga, ON L4W 5K4, Canada
            </p>
            <GoogleMap
              mapContainerClassName="google-map"
              center={center}
              zoom={19}
            >
              <Marker
                position={center}
                icon={
                  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                }
              />
            </GoogleMap>
          </section>
        ) : (
          <></>
        )}
        <section>
          <h3>USEFUL LINKS</h3>
          <section className="section__usefull-links">
            <ul>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Support Tickets</a>
              </li>
              <li>
                <a href="/">Call for Help</a>
              </li>
              <li>
                <a href="/">Publicidad Digital (Español</a>)
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Carrers</a>
              </li>
              <li>
                <a href="/">Google Ads Questionnarie</a>
              </li>
              <li>
                <a href="/">PPC Management</a>
              </li>
              <li>
                <a href="/">Digital Marketing</a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </Section>
  )
}

export default Map
