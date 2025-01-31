// External libraries
import Image from "next/image";
import React from "react";

interface AccessMessageProps {
  message: string;
  onRedirect: () => void;
}

const AccessMessage: React.FC<AccessMessageProps> = ({
  message,
  onRedirect,
}) => (
  <div className="w-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
    {/* Left Column: Image */}
    <div className="rounded-3xl overflow-hidden w-full">
      <Image
        src="/images/bukhari-virtual-collectibles.gif"
        alt="Claim Token Illustration"
        width={747}
        height={747}
        className="rounded-3xl w-full object-cover bg-zinc-950"
      />
    </div>

    {/* Right Column: Form */}
    <div className="flex flex-col gap-2 lg:gap-4 items-center lg:items-start justify-center h-full">
      <h2 className="text-center lg:text-left text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
        {message}
      </h2>
      <h2 className="text-center lg:text-left text-xs font-normal">
        Please get your access by collect any Harmoni X Bukhari Virtual
        Collectibles at least one edition.
      </h2>
      <button
        type="button"
        className="w-full rounded-lg p-2 border-2 border-solid border-transparent hover:border-zinc-950 text-neutral-200 hover:text-zinc-950 bg-zinc-950 hover:bg-neutral-200 transition-colors duration-300 ease-in-out text-sm leading-4 font-normal uppercase my-1"
        onClick={onRedirect}>
        &lArr; Go to Free NFTs &lArr;
      </button>
    </div>
  </div>
);

export default AccessMessage;
