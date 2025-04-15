import { ModeToggle } from "@/components/controller/mode-toggle";
import { Button } from "@/components/ui";
import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <div className="relative top-0 w-screen h-28 flex items-center justify-center px-[100px] py-4">
      <div className="h-full w-full bg-card rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-[#1c3575AA] p-[18px]">
        <div className="h-full w-full flex items-center justify-between">
          <div className="font-serif font-bold text-[32px] px-6 py-2 rounded-xl cursor-pointer select-none hover:bg-white/5">
            Congo
          </div>
          <ul className="font-sans flex gap-4 text-xl font-normal">
            <li className="px-6 py-3 hover:underline underline-offset-[5px]">
              <Link
                className="[&.active]:font-bold [&.active]:underline"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="px-6 py-3 hover:underline underline-offset-[5px]">
              <Link
                className="[&.active]:font-bold [&.active]:underline"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="px-6 py-3 hover:underline underline-offset-[5px]">
              <Link
                className="[&.active]:font-bold [&.active]:underline"
                to="/explore"
              >
                Explore
              </Link>
            </li>
            <li className="px-6 py-3 hover:underline underline-offset-[5px]">
              <Link
                className="[&.active]:font-bold [&.active]:underline"
                to="/places"
              >
                Places
              </Link>
            </li>
          </ul>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon">
              <Icon icon="fa:github" />
            </Button>
            <ModeToggle />
            <Button
              variant="default"
              size="icon"
              className="bg-[#2DA984] text-foreground"
            >
              <Icon icon="whh:emptycart" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
