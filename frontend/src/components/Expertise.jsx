import React from "react";
import benefits from "../data/benefits";

const Expertise = () => {
  return (
      <div className="container mx-auto flex mt-32 max-md:mt-16 gap-7 max-md:justify-center max-md:items-center max-md:flex-col">
        <div className="w-1/2 max-md:w-full  flex flex-col gap-4">
          <h2 className="text-6xl max-sm:text-4xl">Why Choose Us?</h2>
          <div className="px-5 py-1 border w-fit rounded-4xl">
            <p>Benefits</p>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full flex flex-wrap   ">
            {
                benefits.map((item)=>(
                    <div className="w-1/2 my-6 max-md:w-full flex flex-col max-md:flex-row gap-6">
                        <img src={item.img.url} alt={item.img.alt} className="w-10 h-10"/>
                       <div className="">
                       <h4 className="text-2xl">{item.title}</h4>
                       <p className="max-w-72">{item.description}</p>
                       </div>
                    </div>
                ))
            }
        </div>
      </div>
  );
};

export default Expertise;
