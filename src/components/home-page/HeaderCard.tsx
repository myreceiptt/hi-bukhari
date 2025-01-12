import Image from "next/image";

export default function HeaderCard() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] gap-4 content-center">
      <main className="flex flex-col gap-4 row-start-2 items-center">
        <div className="flex flex-col gap-2 items-center">
          <Image
            className="invert-0 dark:invert"
            src="/memora-logo.png"
            width={222}
            height={222}
            alt="Memora Logo"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-foreground dark:text-background text-center text-xl font-[family-name:var(--font-geist-sans)] font-semibold">
            MEMORA NFT
          </h1>
          <h2 className="text-foreground dark:text-background text-center text-lg font-semibold">
            <code className="bg-foreground dark:bg-background text-background dark:text-foreground px-1 py-0.5 rounded text-base font-[family-name:var(--font-geist-mono)] font-semibold">
              (DEMO)
            </code>
          </h2>
          <h3 className="text-foreground dark:text-background text-center text-lg font-semibold">
            This DEMO is intended to offer the creation of a product that is
            expected to consistently run well and as well as possible, according
            to the income generated and the value formed by its users.
          </h3>
        </div>
      </main>
    </div>
  );
}
