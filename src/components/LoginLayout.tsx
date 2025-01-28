// External libraries
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Image configurations
import art from "../../public/bukhari-fa-login-02.png";
import banner from "../../public/bukhari-fa-login-04-crop.png";
import powered from "../../public/bukhari-fa-login-06-crop.png";

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full lg:grid lg:grid-cols-2">
    <div className="w-full relative h-screen hidden lg:block">
      <Image
        src={art}
        alt="Bukhari Islamic Art Background for Login Page."
        width={474}
        height={474}
        className="absolute inset-0 w-full h-full object-contain"
        priority
      />
    </div>
    <div className="w-full flex flex-col gap-5 items-center justify-center h-screen px-4 md:px-12">
      <div id="headers" className="w-full flex flex-col gap-2">
        <Link href="/">
          <Image
            src={banner}
            alt="Bukhari Islamic Art Banner with Partners Logo."
            width={474}
            height={474}
            className="z-0 object-contain w-full"
            priority
          />
        </Link>
        <h1 className="flex text-left text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-hitam-judul-body tracking-tighter justify-start align-middle">
          Get Ready!
        </h1>
        <h2 className="flex text-left text-xs md:text-sm lg:text-base xl:text-lg font-normal text-hitam-judul-body tracking-tighter justify-start align-middle">
          Register Now to Immerse Yourself in Galeri Harmoni Istiqlal Digital
          Experience
        </h2>
      </div>
      {children}
      <div id="footers" className="w-full flex flex-col gap-4">
        <Link href="https://voyage.co.id/" target="_blank">
          <Image
            src={powered}
            alt="Bukhari Islamic Art Powered by VOYAGE."
            width={474}
            height={474}
            className="z-0 object-contain w-full"
            priority
          />
        </Link>
      </div>
    </div>
  </div>
);

export default LoginLayout;
