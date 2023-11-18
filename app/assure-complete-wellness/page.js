"use client";

import { Accordian } from "@/components/Accordian";
import { ChooseAssure } from "@/components/ChooseAssure";
import { Cart } from "@/components/svg-components/Cart";
import { Rupees } from "@/components/svg-components/Rupees";
import { useCart } from "@/context/context";
import { AddCard, Addchart, CardGiftcardOutlined } from "@mui/icons-material";
import React from "react";

export const page = () => {
  const { cartState, cartDispatch } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Your Product Name",
      price: 300,
      quantity: 1, // Set the initial quantity
      discount: 10,
    };
    const existingProduct = cartState.products.find((p) => p.id === product.id);

    if (existingProduct) {
      // If the product exists, update its quantity
      cartDispatch({
        type: "INCREMENT",
        productId: product.id,
      });
    } else {
      // If the product doesn't exist, add it to the cart
      cartDispatch({
        type: "ADD_TO_CART",
        product,
      });
    }
  };
  return (
    <>
      <main className="d-flex flex-wrap float-start col-12">
        <section>
          <div className="container">
            <div className="web-container">
              <div className="row">
                <div className="title col-12 float-start text-center">
                  <h3>WELLNESS PACKAGE FOR MAN</h3>
                </div>
                <div className="col-lg-11 m-auto col-12 float-start grey-background pt-4 px-0">
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Package Name</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12">
                        <p>
                          <strong>
                            Assure Complete Wellness Package For Man
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>About Package</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12">
                        <p>
                          The Assure Complete Wellness Package for Men is a
                          comprehensive health program tailored to meet the
                          unique healthcare needs of men. This package includes
                          a wide range of essential tests and screenings
                          designed to assess your overall health and well-being.
                          From cardiovascular health checks to hormone levels
                          and vitamin deficiencies, our package covers it all.
                          With the Assure Complete Wellness Package, you can
                          take proactive steps towards a healthier and more
                          fulfilling life, ensuring that you are in peak
                          condition to tackle life's challenges with confidence.
                          Prioritise your health and vitality with this
                          all-encompassing wellness package specifically
                          designed for men.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Parameters Included</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12">
                        <p>26</p>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Exclusive Offer</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12 ">
                        <div className="packageprice d-flex align-items-center gap-5">
                          <div className="actualprice">
                            <Rupees /> <span>7410</span>
                          </div>
                          <div className="discountprice gradient  text-white m-0">
                            <Rupees /> <span>2500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Discount</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12 ">
                        <p>UPTO 66%</p>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>Highlights</strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12 ">
                        <div className="highlights flex-center flex-wrap gap-3 justify-content-start">
                          <p>
                            Parameters Included <strong>26</strong>
                          </p>
                          <p>
                            <strong>FREE</strong> Sample Collection
                          </p>
                          <p>
                            <strong>FREE</strong> Report Counselling
                          </p>
                          <p>
                            Test booked so far: <strong>200</strong>{" "}
                          </p>
                          <p>
                            Report Time: <strong>Same Day</strong>
                          </p>
                          <p>
                            Fasting: Overnight <strong>8 hours</strong>
                          </p>
                          <p>
                            Test Recommended for <strong>Male</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="detailrow">
                    <div className="row">
                      <div className="detailtitle col-lg-3 col-12">
                        <p>
                          <strong>
                            Test Details <br />
                            (Parameters included : 26)
                          </strong>
                        </p>
                      </div>
                      <div className="detaildescrp col-lg-9 col-12">
                        <Accordian />
                        <div className="col-12 flex-center mt-5 mb-5 justify-content-start gap-3">
                          <a
                            className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-12 d-flex justify-content-center gap-2"
                            onClick={handleAddToCart}
                          >
                            <Cart /> Add to Cart
                          </a>
                          <a className="button button--aylen button--round-l button--text-thick  gradient col-lg-3 col-12">
                            Book Home Collection
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ChooseAssure />
      </main>
    </>
  );
};
export default page;
