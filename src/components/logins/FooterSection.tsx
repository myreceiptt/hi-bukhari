"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-hitam-judul-body py-4 px-4 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-4 md:gap-10">
        <div className="w-full grid grid-cols-1 justify-items-center gap-4">
          {/* Newsletter Signup */}
          <div className="w-full">
            <h3 className="text-center sm:text-left text-sm md:text-base font-semibold text-back-ground">
              Catch our latest updates
            </h3>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="enter your email address"
                className="text-xs md:text-sm w-full px-2 py-2 border border-border-tombol rounded-l-lg bg-transparent focus:outline-none placeholder-icon-wording text-border-tombol"
              />
              <button className="text-xs md:text-sm px-6 py-2 bg-back-ground font-semibold rounded-r-lg text-hitam-judul-body">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full">
            <h3 className="text-center sm:text-left text-xs md:text-sm font-semibold text-back-ground">
              Join the Community
            </h3>
            <div className="flex gap-2 mt-2 justify-center sm:justify-start">
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaDiscord />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaXTwitter />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 justify-between gap-4">
          <div className="w-full">
            <h3 className="text-center sm:text-left text-xs md:text-sm font-semibold text-icon-wording">
              Claim Pages
            </h3>
            <ul className="text-center sm:text-left text-xs sm:text-sm md:text-base text-back-ground mt-2">
              <li>
                <Link href="/free">Free Claim</Link>
              </li>
              <li>
                <Link href="/paid">Paid Claim</Link>
              </li>
              <li>
                <Link href="/redeem">Coins Reward</Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h3 className="text-center sm:text-left text-xs md:text-sm font-semibold text-icon-wording">
              Terms & Policy
            </h3>
            <ul className="text-center sm:text-left text-xs sm:text-sm md:text-base text-back-ground mt-2">
              <li>
                <Link href="/terms" target="_blank">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy" target="_blank">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-border-tombol mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        {/* Copyrights (Left on lg, Center on md) */}
        <div className="w-full text-xs text-center sm:text-left text-icon-wording">
          <p>
            © 2025 Harmoni Istiqlal X Bukhari Creative Group. All rights
            reserved.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <Link
              href="/terms"
              target="_blank"
              className="text-xs text-center sm:text-left text-back-ground">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              target="_blank"
              className="text-xs text-center sm:text-left text-back-ground">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Logo & Powered By (Right on lg, Center on md) */}
        <div className="w-full flex justify-center sm:justify-end">
          <Image
            src="/images/bukhari-fa-logo-footer.png"
            alt="Harmoni Istiqlal X Bukhari Creative Group"
            width={768}
            height={60}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
