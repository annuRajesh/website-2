import React from "react";

const About = () => {
  return (
    <div className="container mx-auto flex mt-32 max-md:mt-16 gap-3 max-md:flex-col">
      <div className="w-1/2 max-md:w-full flex flex-col gap-4">
        <h2 className="text-6xl max-sm:text-4xl">Who We Are</h2>
        <div className="px-5 py-1 border w-fit rounded-4xl">
          <p>About</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-6 max-md:w-full ">
        <h3 className="text-4xl font-light max-sm:text-2xl">
          Empowering Future Healthcare Heroes: Your Path to a Thriving
          Paramedical Career
        </h3>
        We are dedicated to guiding aspiring paramedical professionals in India
        by equipping them with essential knowledge, resources, and mentorship.
        Our goal is to support students in making informed career decisions and
        building a successful future in the medical field.
        <div className="flex gap-5 ">
        <a
          href="tel:+917676991188"
          className="border border-black text-white bg-black px-10 py-3 hover:bg-white hover:text-black duration-300 w-fit"
        >
          Call us
        </a>
        <a
          href="mailto:"
          className="border border-black text-white bg-black px-10 py-3 hover:bg-white hover:text-black duration-300 w-fit"
        >
          Mail us
        </a>
      </div>
      </div>
     
    </div>
  );
};

export default About;
