import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white px-5 py-10 flex max-md:flex-col gap-4  justify-between">
      <div className="flex flex-col gap-6 w-1/2 max-md:w-full">
        <h3 className="text-4xl">Let's Get In Touch</h3>
        <div className="px-5 py-1 border w-fit rounded-4xl">
          <p>Connect</p>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            📞 Call Now: <a href="">7676991188</a> | <a href="">9880606006</a>{" "}
          </p>
          📧 Email Us: info@example.com
        </div>
      </div>
      <div className="w-1/2 max-md:w-full flex flex-col gap-6">
        <h3 className="text-4xl">Locate Us</h3>
        <address>📍67,C A Towers,Sathanur,Bagalur Main Rd, <br /> Bengaluru, Karnataka,562149</address>
      </div>
    </div>
  );
};

export default Footer;
