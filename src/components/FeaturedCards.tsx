import Link from "next/link";
import Image from "next/image";

export default function FeaturedCards() {
  return (
    <main className="grid gap-4 place-items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center text-sm md:text-base lg:text-lg xl:text-xl font-normal">
          Bukhari Islamic Art Digital Souvenir
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            href: "/#",
            src: "/bukhari-fa-login-02-3.png",
            alt: "Affordable Exclusive Digital Souvenir",
          },
          {
            href: "/#",
            src: "/bukhari-fa-login-02-2.png",
            alt: "Free Exclusive Digital Souvenir",
          },
          {
            href: "/#",
            src: "/bukhari-fa-login-02-1.png",
            alt: "Redeem Priceless Coins Reward",
          },
        ].map(({ href, src, alt }, index) => (
          <Link href={href} key={index}>
            <button
              type="button"
              className="w-full p-2 rounded-3xl hover:scale-105 transition-transform duration-300 ease-in-out">
              <Image src={src} width={474} height={474} alt={alt} priority />
            </button>
          </Link>
        ))}
      </div>
    </main>
  );
}
