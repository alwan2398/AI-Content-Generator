import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

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
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="bg-glassmorphism backdrop-filter backdrop-blur-lg">
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>
        <ul className="flex flex-col space-y-8 text-gray-300 my-12 font-semibold">
          {navMenu.map((item) => (
            <li
              key={item.name}
              className="hover:text-white hover:bg-slate-500 duration-100 transition p-2 rounded-lg"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
