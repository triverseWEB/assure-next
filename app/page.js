import React from "react";
import { HForm } from "@/components/HForm";
import Image from "next/image";
import { Cancer } from "@/components/svg-components/Cancer";
import { ConditionGround } from "@/components/svg-components/ConditionGround";
import { Viral } from "@/components/svg-components/Viral";
import { Fever } from "@/components/svg-components/Fever";
import { Heart } from "@/components/svg-components/Heart";
import { Diabetes } from "@/components/svg-components/Diabetes";
import { Hypertenstion } from "@/components/Hypertenstion";
import { Infertility } from "@/components/svg-components/Infertility";
import { Allergy } from "@/components/svg-components/Allergy";
import { Alltime } from "@/components/svg-components/Alltime";
import { Samedaydelivery } from "@/components/svg-components/Samedaydelivery";
import { FoundedDoctor } from "@/components/FoundedDoctor";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { HighOn } from "@/components/svg-components/HighOn";
import { FiveHundredplus } from "@/components/svg-components/FiveHundredplus";
import { ConsultingService } from "@/components/svg-components/ConsultingService";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { AssureSlide } from "@/components/AssureSlide";
import { ProductSlider } from "@/components/ProductSlider";
import { Seasonalpack } from "@/components/Seasonalpack";
import { Organslider } from "@/components/Organslider";
import { TestByCondition } from "@/components/TestByCondition";
import { Testimonials } from "@/components/Testimonials";
import { Videos } from "@/components/Videos";
import { Faq } from "@/components/Faq";
import Link from "next/link";

export default function Home() {
  return (
    <main className="d-flex flex-wrap float-start col-12">
      <section className="position-relative">
        <div className="gradient-layer"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-xs-12 col-12">
              <AssureSlide className="no-buttons colornavigations col-12 float-start" />
            </div>
            <div className="col-lg-3 col-md-4 col-xs-12 col-12 d-flex align-items-center">
              <HForm />
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10" />
        <Line className="svgwidthline position-absolute opacity-10" />
      </section>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="title col-12 float-start text-center">
                  <h3 className="grid-center lh-1">
                    SEASONAL packages <span>DENGUE, CHIKUNGUNYA, MALARIA</span>
                  </h3>
                </div>
                <Seasonalpack className="arrows productslider minusbottom seasonalpack" />
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
        <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
      </section>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="title col-12 float-start text-center">
                  <h3>Health Check-up packages</h3>
                </div>
                <ProductSlider className="colornavigations col-12 float-start arrows productslider minusbottom" />
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10" />
        <Line className="svgwidthline position-absolute opacity-10 top-20 end-0" />
      </section>
      <section id="organs" className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="title col-12 float-start text-center mb-3">
                  <h3 className="grid-center text-white">TEST BY ORGAN</h3>
                </div>
                <Organslider className="navigationwhite hovershadow" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-image position-absolute">
          <Image
            src="/gradient-layer.webp"
            alt="gradient file"
            width={1920}
            height={1752}
          />
        </div>
      </section>
      <section className="position-relative mt-3">
        <div className="container">
          {/* here is the component */}
          <TestByCondition />
        </div>
        <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
      </section>
      <section className="position-relative p-80 grey-background">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>ABOUT ASSURE PATHLAB</h3>
              </div>
              <div className="col-lg-7 m-auto col-xs-12 col-12 text-center">
                <p>
                  Assure Pathlabs was established by Dr. Sanjay Wadhwa and Dr.
                  Lovely Razdan in 2015. Our high ethical values necessitate
                  every man, woman, and child to benefit from advancements in
                  healthcare – despite living in their living location. It is
                  this idea of serving humanity that grows our commitment to
                  improve and deliver useful health innovations that respond to
                  the general, specific, and real needs of vulnerable
                  populations. Assure labs in Jalandhar ensures on-time and
                  specific diagnosis plays a significant role to optimize
                  health, treatment of diseases, eliminating disease burden, and
                  further improving health.
                </p>
                <div className="col-12 flex-center mt-4">
                  <Link
                    href="/about-us"
                    className="button button--aylen button--round-l button--text-thick text-uppercase gradient col-lg-3 col-12 mt-3"
                  >
                    know more{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
      </section>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>WHY ASSURE PATHLABS?</h3>
              </div>
              <div className="col-lg-10 m-auto col-12 float-start">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        {" "}
                        <Alltime />
                      </span>
                      <p>24x7</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        {" "}
                        <Samedaydelivery />
                      </span>
                      <p>Same Day Report</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        {" "}
                        <FoundedDoctor />
                      </span>
                      <p>Founded by Doctors</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        {" "}
                        <AdvancedTechnology />
                      </span>
                      <p>Advanced Technology</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        {" "}
                        <HighOn />
                      </span>
                      <p>High on Safety and Hygeine</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        {" "}
                        <FiveHundredplus />
                      </span>
                      <p>500+ Test</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-xs-6 col-12">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className="gradient flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        {" "}
                        <ConsultingService />
                      </span>
                      <p>Consultation Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10 start-0 bottom-0 top-inherit" />
        <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
      </section>
      <section id="testimonial" className="testimonial">
        <div className="container position-relative z-index-2">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3 className="text-white">TESTIMONIALS</h3>
              </div>
              <div className="col-lg-11 col-12 m-auto float-start">
                <Testimonials className="minusbottom navigationwhite" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="faq">
        <div className="container position-relative z-index-2">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3 className="">Frequently Asked Questions.</h3>
              </div>
              <div className="col-lg-11 col-12 m-auto float-start">
                <Faq className="minusbottom " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="vedio_review" className="vedio_review">
        <div className="container position-relative z-index-2">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3 className="">OUR VIDEOS</h3>
              </div>
              <div className="col-lg-11 col-12 m-auto float-start">
                <Videos className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
