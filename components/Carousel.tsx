/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

// Images

const data = [
  {
    name: "Malaria Detection",
    description: "Designed and implemented an image-based malaria detection system using MATLAB, combining machine learning and image processing techniques.",
    href:`https://github.com/MudasirAhmad1/Malaria-Detection`,
    img: "/Group1.jpg",
  },
  {
    name: "Resturant",
    description: "A visually engaging platform showcasing the menu, location, and services. Includes features like online reservations, contact forms, and customer reviews to enhance user experience and support the restaurant’s digital presence.",
    href:`https://github.com/MudasirAhmad1/Resturant`,

    img: "/Group2.jpg",
  },
  {
    name: "ClickinTech",
    description: "Designed and developed a website for ClickinTech’s client.Built to enhance hands-on learning, it allows institutions to offer remote technical training in a more accessible and effective way.",
    href:`https://clikintech.com/`,

    img: "/Group3.jpg",
  },
  {
    name: "Finswitch:",
    href:`https://finswitch.in/`,
    description: "A company focused on real estate and trading solutions. The platform provides users with a seamless experience to view, manage, and analyze property and trading data through an intuitive dashboard interface.",
    img: "/Group4.jpg",
  },
  
];
// const featuredData = [{}]
let count = 0;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    // count = (count + 1) % featuredImages.length;
    count = (count + 1) % data.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    // const productsLength = featuredImages.length;
    const productsLength = data.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  return (
    <section className="p-4 lg:p-8 " id="work">
      <div className="container mx-auto space-y-3">
        <div className="flex flex-row items-center">
          <div className="section-line bg-[#FC4370] w-16 h-1 mr-6" style={{width:'4rem',}}></div>
          <p
            className="section-category text-greyText text-base font-medium"
            style={{opacity: 1, transform:'translate(0px, 0px)',}}
          >
            Work
          </p>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <div className="flex items-center justify-center max-w-[36rem] ">
            <img className=" rounded-xl" src={data[currentIndex].img} alt="" />
          </div>
          <div className="flex flex-col justify-center flex-1 px-6 py-12 dark:bg-coolGray-900">
            <div className=" flex items-center px-3 my-[4rem] sm:ml-[-2rem]">
              <button
                onClick={handleOnPrevClick}
                aria-label="previous"
                className="mx-3 default-focus bg-[#393D5F] hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
              </button>
              <span>
                0{count + 1}/0{data.length}
              </span>
              <button
                onClick={handleOnNextClick}
                aria-label="next"
                className="mx-3 default-focus bg-[#393D5F] hover:bg-lighterGrey focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
            <h1 className="text-6xl font-bold">{data[currentIndex].name}</h1>
            <p className="my-6 dark:text-gray-400 text-lg">
              {data[currentIndex].description}
            </p>
            <button type="button" className="self-start bg-[#FC4370] p-2 px-[.8rem] text-lg rounded">
              <a href={data[currentIndex].href}> Visit Site </a> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
