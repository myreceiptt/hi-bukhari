import Link from "next/link";
import Image from "next/image";

export default function FeaturedCards() {
  return (
    <main className="grid grid-col gap-4 items-center">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-foreground dark:text-background text-center text-lg font-[family-name:var(--font-geist-sans)] font-semibold uppercase">
          Demo Features
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 content-center">
        <button
          type="button"
          className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-transparent bg-foreground dark:bg-background text-background dark:text-foreground hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold uppercase">
            Paid Claims
          </h1>
          <Link href="/paidclaims">
            <Image
              className="invert dark:invert-0"
              src="/memora-logo.png"
              width={111}
              height={111}
              alt="Beware of Scams!"
            />
          </Link>
        </button>
        <button
          type="button"
          className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-transparent bg-foreground dark:bg-background text-background dark:text-foreground hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold uppercase">
            Free Claims
          </h1>
          <Link href="/freeclaims">
            <Image
              className="invert dark:invert-0"
              src="/memora-logo.png"
              width={111}
              height={111}
              alt="Beware of Scams!"
            />
          </Link>
        </button>
        <button
          type="button"
          className="w-full justify-items-center p-2 rounded-lg border-2 border-solid border-transparent bg-foreground dark:bg-background text-background dark:text-foreground hover:scale-105 transition-transform duration-300 ease-in-out">
          <h1 className="text-lg font-[family-name:var(--font-geist-mono)] font-semibold uppercase">
            USER PROFILE
          </h1>
          <Link href="/profile">
            <Image
              className="invert dark:invert-0"
              src="/memora-logo.png"
              width={111}
              height={111}
              alt="Beware of Scams!"
            />
          </Link>
        </button>
      </div>
    </main>
  );
}
