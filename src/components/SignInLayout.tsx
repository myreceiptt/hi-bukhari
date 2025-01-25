// External libraries
import React from "react";
import Image from "next/image";

// Image configurations
import art from "../../public/bukhari-fa-login-02.png";
import banner from "../../public/bukhari-fa-login-04.png";
import powered from "../../public/bukhari-fa-login-06.png";

const SignInLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="w-full lg:grid lg:grid-cols-2">
    <div className="relative h-screen hidden lg:block">
      <Image
        src={art}
        alt="Bukhari Islamic Art Background for Login Page."
        width={474}
        height={474}
        className="absolute inset-0 w-full h-full object-contain"
        priority
      />
    </div>
    <div className="flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div>
          <Image
            src={banner}
            alt="Bukhari Islamic Art Banner with Partners Logo."
            width={474}
            height={474}
            className="z-0 object-contain w-full"
            priority
          />
          <h1 className="flex text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh]">
            Get Ready!
          </h1>
          <h2 className="flex text-left text-xs md:text-sm lg:text-base xl:text-lg font-medium tracking-tighter justify-start align-middle px-[4vh] md:px-[7vh]">
            Register Now to Immerse Yourself in Galeri Harmoni Istiqlal Digital
            Experience
          </h2>
        </div>
        {children}
        <div>
          <Image
            src={powered}
            alt="Bukhari Islamic Art Powered by VOYAGE."
            width={474}
            height={474}
            className="z-0 object-contain w-full"
            priority
          />
        </div>
      </div>
    </div>
  </div>
);

export default SignInLayout;
