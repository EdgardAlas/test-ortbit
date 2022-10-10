import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import graphic from "../../../images/graphic.webp"
import idea from "../../../images/idea.webp"
import money from "../../../images/money.webp"
import pencil from "../../../images/pencil.webp"
import puzzle from "../../../images/puzzle.webp"
import React from "react"
import Section from "../../Section"
import SlideSection from "./slide/SlideSection"
import tower from "../../../images/tower.webp"

const Slider = () => {
  return (
    <Section subtitle="An Innovative Digital Marketing Approach">
      <Swiper
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <section className="slide__section">
            <SlideSection title={"TEAM WORK"} img={tower}>
              <p>
                Our Team of experts will work with you to create a website that
                you are proud of and create a custom campaign to attract
                qualified traffic to convert into paying customers.
              </p>
            </SlideSection>
            <SlideSection title={"INNOVATION"} img={idea}>
              <p>
                While an interface or a copy may appearjust right, does it
                produce the results you're looking for? This is where a
                data-driven decision-making comes into play. approach
              </p>
            </SlideSection>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="slide__section">
            <SlideSection title={"DATA DRIVEN"} img={graphic}>
              <p>
                We protect our customers at a level that surpasses any other
                agency. Our standard Service Level Agreement (SLA) applies to
                all clients, we also offer expanded SLA for clients requiring
                faster response times and priority
              </p>
            </SlideSection>
            <SlideSection title={"SERVICE LEVEL AGREEMENT"} img={pencil}>
              <p>
                We protect our customers at a level that surpasses any other
                agency. Our standard Service Level Agreement (SLA) applies to
                all clients, we also offer expanded SLA for clients requiring
                faster response times and priorityy
              </p>
            </SlideSection>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="slide__section">
            <SlideSection title={"CONSULTING & TRAINING"} img={puzzle}>
              <p>
                If you're still not sure about how revamping to invest in your
                website or implementing a marketing strategy, you could benefit
                from a complete analysis, so that you know exactly what to do,
                and why.
              </p>
            </SlideSection>
            <SlideSection title={"FLAT RATE MONTHLY FEES"} img={money}>
              <p>
                Our monthly flat-ratee pricing makes your plan choice easy tO
                understand. There are NO Hidden Fees! We take it month by month
                and we start and stop your campaigns on command.
              </p>
            </SlideSection>
          </section>
        </SwiperSlide>
      </Swiper>
    </Section>
  )
}

export default Slider
