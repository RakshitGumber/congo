import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui";

type CarouselItem = {
  image: string;
  link: string;
};

type CarouselProps = {
  items: CarouselItem[];
  className?: String;
};

const Carousel: React.FC<CarouselProps> = ({ items, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, [items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={cn("relative w-screen h-[40svh] overflow-hidden", className)}
    >
      {/* Images */}
      <div
        className="w-full h-[40svh] flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-full h-[40svh] flex-shrink-0"
          >
            <img
              src={item.image}
              alt={`Slide ${index}`}
              className="w-full h-[40svh] object-cover brightness-50"
            />
          </a>
        ))}
      </div>

      {/* Controls */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className="absolute top-1/2 transform -translate-y-1/2 hover:bg-opacity-75 transition text-gray-400"
      >
        <Icon icon="fa:chevron-left" />
      </Button>

      <Button
        onClick={goToNext}
        size="icon"
        variant="ghost"
        className="absolute top-1/2 transform right-0 -translate-y-1/2 hover:bg-opacity-75 transition text-gray-400"
      >
        <Icon icon="fa:chevron-right" />
      </Button>

      {/* Dashes */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 flex-1 cursor-pointer transition-all ${
              currentIndex === index ? "bg-gray-400/50" : "bg-gray-700/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
