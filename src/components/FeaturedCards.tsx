import Link from "next/link";
import Image from "next/image";

export default function FeaturedCards() {
  return (
    <main className="grid grid-col gap-4 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-center text-lg font-semibold uppercase">
          Bukhari Islamic Art Digital Souvenir
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 content-center">
        <button
          type="button"
          className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-zinc-950 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg font-semibold uppercase">Paid Souvenir</h1>
          <Link href="/#">
            <Image
              src="/erc20-icons/mem0ra.png"
              width={111}
              height={111}
              alt="Affordable Exclusive Digital Souvenir"
            />
          </Link>
        </button>
        <button
          type="button"
          className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-zinc-950 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg font-semibold uppercase">Free Souvenir</h1>
          <Link href="/#">
            <Image
              src="/erc20-icons/mem0ra.png"
              width={111}
              height={111}
              alt="Free Exclusive Digital Souvenir"
            />
          </Link>
        </button>
        <button
          type="button"
          className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-zinc-950 hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg font-semibold uppercase">Redeem Coin</h1>
          <Link href="/#">
            <Image
              src="/erc20-icons/mem0ra.png"
              width={111}
              height={111}
              alt="Redeem Priceless Coins Reward"
            />
          </Link>
        </button>
      </div>
    </main>
  );
}
