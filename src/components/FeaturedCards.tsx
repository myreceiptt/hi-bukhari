// External libraries
import Link from "next/link";
import Image from "next/image";

export default function FeaturedCards() {
  return (
    <main className="grid gap-4 place-items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal">
          Bukhari Islamic Art Virtual Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            href: "/paid",
            src: "/bukhari-fa-login-02-3.png",
            overlay: "/overlay-image-3.png",
            alt: "Affordable Exclusive Digital Souvenir",
          },
          {
            href: "/free",
            src: "/bukhari-fa-login-02-2.png",
            overlay: "/overlay-image-2.png",
            alt: "Free Exclusive Digital Souvenir",
          },
          {
            href: "/redeem",
            src: "/bukhari-fa-login-02-1.png",
            overlay: "/overlay-image-1.png",
            alt: "Redeem Priceless Coins Reward",
          },
        ].map(({ href, src, overlay, alt }, index) => (
          <Link href={href} key={index}>
            <button
              type="button"
              className="w-full p-2 rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out relative group">
              {/* Main image */}
              <Image
                src={src}
                width={400}
                height={400}
                alt={alt}
                priority
                className="rounded-3xl"
              />
              {/* Overlay image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={overlay}
                  width={400}
                  height={400}
                  alt="Overlay Text"
                />
              </div>
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}
