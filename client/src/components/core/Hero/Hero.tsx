import { Button } from "@/components/ui";
import { useTheme } from "@/hooks/useTheme";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="relative top-0 h-[calc(100vh-112px)]"></div>
      <div
        className="absolute top-0 left-0 h-screen w-screen overflow-hidden"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(60deg,rgba(0, 0, 0, 1) 0%, rgba(20, 51, 82, 1) 60%, rgba(35, 111, 168, 1) 100%)"
              : "linear-gradient(60deg,rgba(255, 255, 255, 1) 0%, rgba(92, 215, 237, 1) 60%, rgba(73, 203, 230, 1) 100%)",
        }}
      >
        <img
          src="/clothes/biege-shirt.jpg"
          alt="shirt"
          className="w-[400px] h-[400px] object-cover absolute top-0 left-[30%]"
        />
        <img
          src="/clothes/dark-shirt.jpg"
          alt="shirt"
          className="w-[400px] h-[400px] object-cover absolute bottom-0 right-0"
        />
        <div className="border-b-2 border-gray-800 abolute top-0 left-0 w-[65vh] flex items-center justify-center -rotate-90 -translate-x-[20%] translate-y-[45vh]">
          <ul className="flex w-full items-center justify-evenly pb-5 text-gray-500">
            <li>
              <a href="" className="flex gap-2 items-center">
                <Icon icon="fa-instagram" />
                Instagram
              </a>
            </li>
            <li>
              <a href="" className="flex gap-2 items-center">
                <Icon icon="fa-linkedin" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="twitter" className="flex gap-2 items-center">
                <Icon icon="fa-twitter" />
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute top-72 left-64 w-full">
          <h1 className="text-9xl font-serif font-black absolute top-0 left-0 w-full drop-shadow-2xl">
            Best in Clothes
          </h1>
          <h1 className="text-9xl font-serif font-black absolute top-44 left-44 w-full drop-shadow-2xl">
            Best in Brands
          </h1>
        </div>
        <div className="w-[340px] absolute top-[160px] right-[100px]">
          Designed to speak louder than words — because you were never meant to
          blend in.
          <Button
            size="lg"
            className="bg-[#FF5E57] text-foreground font-black mt-4"
          >
            Explore
          </Button>
        </div>
        <div className="w-[240px] absolute bottom-[76px] left-[250px]">
          Level up your everyday fit with bold, head-turning styles built for
          the street kings.
        </div>
        <div className="absolute bottom-12 left-[532px] flex backdrop-blur-md bg-background/10 border border-border rounded-xl p-8 gap-16">
          <div className="flex flex-col gap-1 border-r border-white pr-16">
            <h2 className="text-2xl font-bold underline underline-offset-4 ">
              100K+
            </h2>
            <span className="text-xl">Happy Customers</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold underline underline-offset-4">
              90+
            </h2>
            <span className="text-xl">Top Brands</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
