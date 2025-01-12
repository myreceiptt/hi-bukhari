// import Link from "next/link";
import Image from "next/image";
import { NFT_CONTRACTS } from "@/consts/nft_contracts";

export default function FeaturedAssets() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] gap-4 content-center">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-foreground dark:text-background text-center text-lg font-[family-name:var(--font-geist-sans)] font-semibold uppercase">
            Top Collections
          </h1>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 xl:gap-x-8 gap-y-10">
            {NFT_CONTRACTS.map((item) => (
              <div
                key={item.address}
                className="flex flex-col p-2 w-full justify-items-center rounded-lg bg-foreground dark:bg-background text-background dark:text-foreground">
                {/* <Link
                  href={`/collection/${item.chain.id.toString()}/${
                    item.address
                  }`}
                  className="group"> */}
                  <Image
                    alt={`${item.title} Collection`}
                    src={`${item.thumbnailUrl}`}
                    width={474}
                    height={474}
                    className="rounded-lg bg-background dark:bg-foreground w-full max-w-xs aspect-square object-cover group-hover:opacity-75 xl:aspect-[7/8] mb-2"
                  />
                  <h2 className="text-center text-xs font-[family-name:var(--font-geist-sans)] font-semibold uppercase">
                    {item.title}
                  </h2>
                  <h3 className="text-center text-xs font-[family-name:var(--font-geist-sans)] font-semibold">
                    On {item.chain.name}
                  </h3>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
