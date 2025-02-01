// External libraries
import Image from "next/image";
import Link from "next/link";
import { FaBagShopping, FaSistrix } from "react-icons/fa6";

// Components libraries
import ConnectButtons from "./ConnectButtons";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-back-ground py-4 px-4 md:px-20">
      {/* Logo Section */}
      <div className="w-1/4 sm:w-1/6 flex justify-start">
        <Link href="/">
          <Image
            src="/images/bukhari-fa-login-02-11.png"
            alt="Harmoni Istiqlal X Bukhari Creative Group"
            width={481}
            height={251}
          />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end gap-4">
        {/* Search Bar on Minimum 640px Screen Width*/}
        <div className="w-full hidden sm:flex bg-box-icon items-center justify-center px-4 py-2 rounded-lg">
          <FaSistrix className="w-5 h-5 text-hitam-judul-body" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full bg-transparent outline-none text-xs md:text-sm text-hitam-judul-body placeholder-icon-wording"
          />
        </div>

        {/* Icons Section */}
        <div className="flex space-x-4">
          {/* Search Bar on Below 640px Screen Width*/}
          <button className="sm:hidden w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <FaSistrix />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <FaBagShopping />
          </button>
          <ConnectButtons />
        </div>
      </div>
    </header>
  );
}
