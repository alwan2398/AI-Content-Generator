import Link from "next/link";
import MobileNav from "./MobileNav";

const navMenu = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header className="relative">
      <div className="mx-auto max-w-6xl px-4 md:hidden">
        <div className="flex justify-between py-5 items-center md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold">Alcode</h1>
          </Link>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
      <nav className="pb-5 md:text-sm md:static md:block hidden">
        <div className="item-center mx-auto max-w-7xl px-4 md:flex">
          <div className="flex items-center justify-between py-5 md:block">
            <Link href="/">
              <h1 className="text-3xl font-bold">Alcode</h1>
            </Link>
          </div>
          <div className="flex-1 items-center text-gray-300 font-medium md:flex hidden">
            <ul className="flex-1 space-x-6 justify-center items-center md:flex hidden">
              {navMenu.map((item) => (
                <li
                  key={item.name}
                  className="hover:text-white hover:font-semibold duration-100 transition"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="gap-x-6 items-center justify-end">
              <button className="shadow-[inset_0_0_0_2px_#616467] px-8 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white text-neutral-200 transition duration-200">
                Support
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
