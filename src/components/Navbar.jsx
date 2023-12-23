import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className=" hidden md:flex justify-between mx-5 items-center">
        <div>
          <Link to={"/"} className=" italic md:text-[30px]">
            Authentic Roofing Tiles
          </Link>
        </div>

        <div className=" hidden gap-5 md:flex">
          <p>Proudly made in New Zealand</p>
        </div>
      </div>
      <div className="hidden md:flex  justify-center items-center md:gap-10 capitalize font-semibold mt-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About us </Link>
        <Link to={"/products"}>products </Link>
        <Link to={"/gallery"}>gallery </Link>
        <Link to={"/info"}>architectural info </Link>
        <Link to={"/events"}>events</Link>
        <Link to={"/faq"}>FAQ</Link>
        <Link to={"/contact-us"}>Contact us</Link>
      </div>

      {/* navbar for sm */}
      <div className="md:hidden flex justify-between items-center gap-5">
        <div>
          <h1 className=" italic md:text-[30px]">Authentic Roofing Company</h1>
        </div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className=" text-right md:hidden shadow-2xl bg-gray-200 p-5 space-y-5 absolute top-17 right-7 capitalize font-semibold text-gray-800 translate-x-3 duration-150 flex flex-col">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About us </Link>
          <Link to={"/products"}>products </Link>
          <Link to={"/gallery"}>gallery </Link>
          <Link to={"/info"}>architectural info </Link>
          <Link to={"/events"}>events</Link>
          <Link to={"/faq"}>FAQ</Link>
          <Link to={"/contact-us"}>Contact us</Link>
        </div>
      )}
    </div>
  );
};
