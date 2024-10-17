import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-10 py-8 border-t border-gray-600 items-center justify-between sm:flex">
          <p className="text-gray-300 text-center md:text-left">
            © 2024 Alcode. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-x-6 mt-6 sm:mt-0">
            <Link
              href="https://www.tiktok.com/@alwan.balweel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="w-6 h-6 text-gray-300" />
            </Link>
            <Link
              href="https://www.instagram.com/alwan.balweel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 text-gray-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
