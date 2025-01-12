import Link from "next/link";

export default function FooterBar() {
  return (
    <div className="flex flex-row content-center justify-center p-4 bg-foreground dark:bg-background">
      <div className="flex flex-col gap-2 items-center">
        <h4 className="text-background dark:text-foreground text-center text-sm font-[family-name:var(--font-geist-sans)] font-semibold">
          MEMORA NFT (DEMO)
        </h4>
        <h4 className="text-background dark:text-foreground text-center text-sm font-[family-name:var(--font-geist-sans)] font-semibold">
          Proud Enough to be Offered to You
        </h4>
        <h4 className="text-background dark:text-foreground text-center text-sm font-[family-name:var(--font-geist-sans)] font-semibold">
          by Us, The VOYAGE Team
        </h4>
        <button
          type="button"
          className="flex rounded border-2 border-solid border-transparent bg-background dark:bg-foreground hover:border-background hover:dark:border-foreground hover:bg-foreground hover:dark:bg-background text-foreground dark:text-background hover:text-background dark:hover:text-foreground transition-colors duration-300 ease-in-out items-center">
          <Link
            href="/viaticum"
            target="_blank"
            rel="noopener noreferrer"
            title="Bon Voyage! 🚀">
            <h5 className="text-center text-lg px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold">
              BON VOYAGE! 🚀
            </h5>
          </Link>
        </button>
      </div>
    </div>
  );
}
