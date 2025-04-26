import { ModeToggle } from "@/components/controller/mode-toggle";
import { Button } from "@/components/ui";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMenuOpen(false);
    });
    window.addEventListener("scroll", () => setMenuOpen(false));
  }, []);

  return (
    <div
      id="navbar"
      className="absolute top-0 w-screen xl:h-28 min-h-16 h-fit flex xl:flex-row flex-col items-center justify-center xl:px-[100px] xl:py-4 z-50"
    >
      <div
        className={cn(
          "xl:h16 w-full xl:rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 xl:p-[18px] px-3 py-2 rounded-b-xl",
          theme === "dark"
            ? "bg-black border-[#1A1A1AAA]"
            : "bg-gray-200 border-[#F5F5F5AA]",

          menuOpen ? `h-[calc(64px+256px)]` : "h-16 xl:border border-b"
        )}
      >
        <div className="xl:h-full h-12 w-full flex items-center justify-between">
          <div className="flex items-center xl:gap-4">
            <div className="font-bold xl:text-[32px] text-2xl xl:px-6 px-4 py-2 xl:py-2 rounded-xl cursor-pointer select-none hover:bg-white/5">
              Congo
            </div>
            <ul className="font-sans xl:flex xl:gap-4 hidden xl:text-xl font-normal">
              <li className="xl:px-6 xl:py-3 hover:underline xl:underline-offset-[5px]">
                <Link
                  className="[&.active]:font-bold [&.active]:underline"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="xl:px-6 xl:py-3 hover:underline underline-offset-[5px]">
                <Link
                  className="[&.active]:font-bold [&.active]:underline"
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
              <li className="xl:px-6 xl:py-3 hover:underline underline-offset-[5px]">
                <Link
                  className="[&.active]:font-bold [&.active]:underline"
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li className="xl:px-6 xl:py-3 hover:underline underline-offset-[5px]">
                <Link
                  className="[&.active]:font-bold [&.active]:underline"
                  to="/places"
                >
                  Places
                </Link>
              </li>
            </ul>
          </div>
          <div className="xl:flex hidden items-center xl:gap-4">
            <div className="flex items-center">
              <label
                htmlFor="search"
                className="text-gray-500 xl:h-10 xl:px-4 flex items-center rounded-l-xl bg-gray-700"
              >
                <Icon icon="fa:search" fontSize={18} />
              </label>
              <input
                type="text"
                className="text-white xl:h-10 xl:text-lg placeholder:text-gray-500 rounded-r-xl bg-gray-700 outline-none"
                placeholder="Search"
              />
            </div>
            <div className="flex xl:gap-1">
              <Button variant="ghost" size="icon">
                <Icon icon="fa:github" />
              </Button>
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#FF5E57] text-foreground"
              >
                <Icon icon="whh:emptycart" />
              </Button>
            </div>
          </div>
          <div className="flex items-center xl:hidden gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 [&_svg]:size-5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon icon="fa:search" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 [&_svg]:size-7"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon icon="cuida:menu-outline" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-[#FF5E57] text-foreground w-10 h-10"
            >
              <Icon icon="whh:emptycart" />
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "h-fit w-screen pt-2 pb-2 flex-col left-0 px-3 absolute rounded-b-xl",
            menuOpen ? "flex border-b rounded-b-xl" : "hidden"
          )}
        >
          <ul className=" w-full flex flex-col gap-2">
            <li className="text-xl px-4 py-2 w-full rounded-xl hover:bg-white/5">
              <Link className="flex gap-2 items-baseline">
                <Icon icon="fa:home" />
                Home
              </Link>
            </li>
            <li className="text-xl px-4 py-2 w-full rounded-xl hover:bg-white/5">
              <Link className="flex gap-2 items-baseline">
                <Icon icon="fa:shopping-bag" />
                Shop
              </Link>
            </li>
            <li className="text-xl px-4 py-2 w-full rounded-xl hover:bg-white/5">
              <Link className="flex gap-2 items-baseline">
                <Icon icon="cuida:totem-outline" /> Explore
              </Link>
            </li>
            <li className="text-xl px-4 py-2 w-full rounded-xl hover:bg-white/5">
              <Link className="flex gap-2 items-baseline">
                <Icon icon="fa:map-marker" />
                Places
              </Link>
            </li>
          </ul>
          <div className=" w-full">
            <ModeToggle></ModeToggle>
            <Button variant="ghost" size="icon">
              <Icon icon="fa:github"></Icon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
