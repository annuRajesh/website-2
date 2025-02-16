import React from "react";
import services from "../data/services";

const Services = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 justify-center items-center mt-32 mb-16">
      <h3 className="text-6xl max-md:text-4xl"> Our Services</h3>
      <div className="flex gap-4 justify-center items-center max-md:flex-col">
        {services.map((item) => (
          <div className="w-1/3 rounded-4xl overflow-hidden shadow-xl max-md:w-full ">
            <div className="w-full h-72 overflow-hidden">
              <img
                src={item.img.url}
                alt={item.img.alt}
                className="w-full object-cover"
              />
            </div>
            <div className="p-3">
              <h4 className="text-2xl">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
