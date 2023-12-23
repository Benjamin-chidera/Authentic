import React from "react";
import { Menu } from "../components/Menu";

export const Home = () => {
  const tiles = [
    {
      id: Math.random(),
      img: "https://tilcornigeria.com/wp-content/themes/tilcor/uploads/Shingle-Ebony-Textured-150x100.jpg",
      title: "Shingle",
    },
    {
      id: Math.random(),
      img: "https://tilcornigeria.com/wp-content/themes/tilcor/uploads/Royal-Charcoal-Textured-150x100.jpg",
      title: "roman",
    },
    {
      id: Math.random(),
      img: "https://tilcornigeria.com/wp-content/themes/tilcor/uploads/Royal-Walnut-Textured-150x100.jpg",
      title: "royal",
    },
    {
      id: Math.random(),
      img: "https://lh3.googleusercontent.com/p/AF1QipPesrg0rDWx9zRLt8s74QH50VLLZIADzDXFOscP=s1280-p-no-v1",
      title: "Bond",
    },
    {
      id: Math.random(),
      img: "https://tilcornigeria.com/wp-content/themes/tilcor/uploads/Shake-Ashwood-Textured-150x100.jpg",
      title: "shake",
    },
    {
      id: Math.random(),
      img: "https://lh3.googleusercontent.com/p/AF1QipNkIUchltRgzYRj2oj2mKOJECrEFglfju1BqSe-=s1280-p-no-v1",
      title: "milano",
    },
    {
      id: Math.random(),
      img: "https://tilcornigeria.com/wp-content/themes/tilcor/uploads/Classic-Burgandy-Textured-150x100.jpg",
      title: "classic",
    },
    {
      id: Math.random(),
      img: "https://tilcornigeria.com/wp-content/themes/tilcor/uploads/Tudor-Cedar-Textured--150x100.jpg",
      title: "heritage",
    },
  ];

  return (
    <div className="m-5">
      <div className="">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNiNtkn_P6BG_6TFYeNqLGEPYvhcM5Mhba1DP2M=w1080-h608-p-no-v0"
          alt=""
          className=" w-[875px] h-[150px] md:h-[350px] object-cover object-top mx-auto"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center items-center gap-5 font-bold md:text-[30px] flex-wrap mt-5">
       {
        tiles.map((item) => {
          const { id, img, title } = item;

          return (
            <div key={id}>
              <h1 className=" text-2xl capitalize text-red-600">{title}</h1>
              <img
                src={img}
                alt="Roofing Tiles Pictures"
                className="w-[119px] h-[70px] object-cover  mx-auto"
              />
            </div>
          );
        })
       }
      </div>

      <div>
        <Menu/>
      </div>
    </div>
  );
};
