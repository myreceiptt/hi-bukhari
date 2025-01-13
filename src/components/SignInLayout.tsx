import Image from "next/image";
import art from "../../public/bukhari-fa-login-02.png";
import banner from "../../public/bukhari-fa-login-04.png";
import powered from "../../public/bukhari-fa-login-06.png";

export function SignInLayout(props: { children: React.ReactNode }) {
  return (
    <div className="w-full lg:grid lg:grid-cols-2">
      <div className="overflow-hidden relative h-full hidden lg:block">
        <Image
          className="z-0 object-contain w-full h-full"
          src={art}
          alt="Bukhari Islamic Art Login"
        />
      </div>
      <div className="flex items-center justify-center pt-12 xl:pt-0">
        <div className="w-full flex flex-col items-center px-4">
          <div>
            <Image
              className="z-0 object-contain w-full h-full"
              src={banner}
              alt="Bukhari Islamic Art Login"
            />
            <h1 className="flex text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tighter justify-center px-[5%]">
              Get Ready!
            </h1>
            <h2 className="flex text-center text-sm md:text-base lg:text-lg xl:text-xl font-medium tracking-tighter justify-center px-[5%]">
              Register Now to Immerse Yourself in Galeri Harmoni Istiqlal
              Digital Experience
            </h2>
            <div className="h-10" />
            <div className="flex justify-center"></div>
          </div>
          {props.children}
          <div>
            <Image
              className="z-0 object-contain w-full h-full"
              src={powered}
              alt="Bukhari Islamic Art Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
