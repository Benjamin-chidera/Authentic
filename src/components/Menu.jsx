import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export const Menu = () => {
  return (
    <div className="m-5">
      <div className="md:flex justify-between ">
        <div>
          <h1 className="  md:text-[20px] font-semibold text-red-600">
            Best roofing sheets in Nigeria
          </h1>
          <div className=" max-w-[450px]">
            <p className="text-[15px]">
              Tilcor is an innovative manufacturer and supplier of affordable
              lightweight stone-coated and satin-finish metal types of roofing
              sheets in Nigeria. Tilcor is one of the best roofing companies in
              Nigeria and sells the best roofing material in Nigeria
            </p>
            <p className="text-[15px] mt-5">
              The reason why we are better than the other roofing tiles
              companies in Nigeria is the durability of our roofing tiles – the
              superior stone, satin coating technology coupled with Zincalume
              protected steel – (zinc roofing sheets ) highly researched and
              developed protective coatings can endure the harshest environments
              thanks to the unique, innovative manufacturing process we’ve
              perfected over 25 years of strenuous testing and continual
              improvements. We have the best metal roof tiles in Nigeria, roof
              shingles material, roofing contractors, stone coated metal
              shingles, stone coated roofing sheet and various types of roofing
              sheets in Nigeria along with the best roofing designs in Nigeria
              and we provide top roofing in Nigeria
            </p>
            <p className="text-[15px] mt-5">
              The Tilcor range caters for all types of construction from
              residential to light-commercial and public works, and comprises
              seven distinct profiles –Tudor, Shake, Royal, Bond, Classic, Roman
              and Shingle.. We pride ourselves in being one of the best roof
              shingle companies and provide the best roofing sheet in Nigeria.
              <br />* Shingle and Roman are not available in EU or North
              American markets.
            </p>
          </div>
        </div>

        <section className=" mt-5 md:mt-0">
          <div>
            <h1 className="  md:text-[20px] font-semibold text-red-600">
              Top Roofing in Nigeria
            </h1>
            <div className=" max-w-[300px]">
              <p className="text-[15px]">
                Watch our video about our company, our products and see some
                details of our production process.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="  md:text-[20px] font-semibold text-red-600">
              Take an Inside Look at Tilcor
            </h1>
            <div className=" max-w-[300px]">
              <p className="text-[15px]">
                Click through our corporate brochure to see our values and
                vision behind the Tilcor brand.
              </p>
            </div>

            <div className=" md:w-[300px] h-[300px] mt-5 border border-red-600 flex justify-center items-center text-[30px]">
              MAP
            </div>
          </div>
        </section>
      </div>

      <div>
        <p className=" mt-5">
          All Tilcor products are manufactured at their New Zealand factory,
          which is ISO 9001-accredited and has developed an enviable reputation
          internationally for excellence in product design, quality
          manufacturing and competitiveness.
        </p>
      </div>

      <div className="mt-5">
        <h1 className="  md:text-[20px] font-semibold text-red-600">
          Tiles in Nigeria
        </h1>
        <div className="">
          <p className="text-[15px] mt-5">
            Tilcor is one of the best roofing companies and have roofing systems
            that offer exceptional strength and durability in the harshest
            climates. Tilcor offers the high quality roofs in Nigeria. They are
            water, fire and earthquake resistant; they can withstand
            hurricane-force winds and are backed by a Tilcor Roofing Systems
            warranty. WE manufacture high quality stone coated roofing sheets
            and Metal Roofing tiles in Nigeria.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="  md:text-[20px] font-semibold text-red-600">
          Types of roofing sheets in Nigeria
        </h1>

        <div className="flex gap-5 mt-3 capitalize flex-wrap">
          <p>Shingle</p>
          <p>roman</p>
          <p>heritage</p>
          <p>bond</p>
          <p>classic</p>
          <p>milano</p>
          <p>shake</p>
          <p>royal</p>
        </div>
      </div>

      <div>
        <h1 className="text-red-700 font-bold mt-10 text-2xl">FIND US ON</h1>

        <div className="flex gap-2 mt-3">
          <FaFacebook size={50} color="skyblue" />
          <FaInstagramSquare size={50} color="red" />
          <FaTwitter size={50} color="skyblue" />
          <FaWhatsappSquare size={50} color="green" />
        </div>
      </div>
    </div>
  );
};
