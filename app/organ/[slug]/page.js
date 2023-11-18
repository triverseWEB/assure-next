"use client";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { Rupees } from "@/components/svg-components/Rupees";
import React from "react";
import test_info from "@/Data/Test_detail.json";
import { TestCard } from "@/components/TestCard";
import { useParams } from "next/navigation";

export const page = () => {
  // console.log("this is the data", data.test_data);
  const params = useParams();

  const slug = params.slug;
  const filtered_slug_data = test_info.test_data.filter(
    (p) => p.Department_Name.toLowerCase() === slug
  );

//   const filtered_slug_data = project;

//   console.log("filtered_slug_data", filtered_slug_data);

  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center">
                <h3>{slug} Test</h3>
              </div>
              <div className="col-12 float-start all-test">
                <div className="row">
                  {filtered_slug_data.map((test, index) => (
                    <TestCard
                      key={index} // Don't forget to set a unique key when using .map()
                      ID={test.id}
                      Slug={test.Slug}
                      Test_Name={test.Test_Name}
                      Test_Amount={test.Test_Amount}
                      Discount_Amount={test.Discount_Amount}
                      Test_Category={test.Test_Category}
                      Test_ID={test.Test_ID}
                      Test_Description={test.Test_Description}
                      Who_is_it_for={test.Who_is_it_for}
                      Pre_test_information={test.Pre_test_information}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
            <Line className="svgwidthline position-absolute opacity-10 top-20 start-0" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
