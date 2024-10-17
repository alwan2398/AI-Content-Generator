import { UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Alcode AI</h1>
      <div className="md:flex items-center space-x-4">
        <Button className="bg-gradient-to-br from-purple-400 to-purple-500 hidden md:block">
          Upgrade Pro
        </Button>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
