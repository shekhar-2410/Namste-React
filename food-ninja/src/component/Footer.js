import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="w-full  bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        }}
      >
        <div className=" z-10 bg-cover backdrop-blur-sm bg-black/30  items-center">
          <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
              <h3 className="text-3xl mb-3"> Download our food app </h3>
              <p> Stay Healthy. All day, every day. </p>
              <div className="flex justify-center my-10">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                  <img
                    text-white
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className=" text-white  w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Apple Store </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-300">
              <p className="order-2 md:order-1 mt-8 md:mt-0">
                {" "}
                &copy; FoodNinja, 2023.{" "}
              </p>
              <div className="order-1 md:order-2">
                <span className="px-2">About us</span>
                <span className="px-2 border-l">Contact us</span>
                <span className="px-2 border-l">Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
