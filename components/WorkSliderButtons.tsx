"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const WorkSliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        onClick={() => swiper.slidePrev()}
        aria-label="Previous project"
      >
        <PiCaretLeftBold className="text-xl" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        onClick={() => swiper.slideNext()}
        aria-label="Next project"
      >
        <PiCaretRightBold className="text-xl" />
      </Button>
    </div>
  );
};

export default WorkSliderButtons;