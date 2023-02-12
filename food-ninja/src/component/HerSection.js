import React from "react";

const HerSection = () => {
  return (
    <>
      <section className="z-0 ">
        <div className="bg-black text-white py-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-4">
              <h1 className="text-3xl md:text-5xl  text-yellow-300 tracking-loose mb-3">
                FoodNinja
              </h1>
              <h2 className="text-3xl  md:text-3xl leading-relaxed md:leading-snug ">
                Hundreds of flavors under one roof
              </h2>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                If you also have adequate knowledge about Different
                Mouthwatering Foods and their materials that come with different
                tastes and regions.
              </p>
              <a
                href="#"
                className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
              >
                Explore Now
              </a>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap content-center">
                <div>
                  <img
                    className="inline-block mt-28 hidden xl:block"
                    src="\food1.svg"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-24 md:mt-0 p-8 md:p-0"
                    src="\ice.svg"
                  />
                </div>
                <div>
                  <img
                    className="inline-block mt-28 hidden lg:block"
                    src="\food2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HerSection;
