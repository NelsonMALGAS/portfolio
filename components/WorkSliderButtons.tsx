"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type WorkSliderButtonsProps = {
    containerStyles: string;
    btnStyles: string;
    iconStyles: string;
  };

const WorkSliderButtons:React.FC<WorkSliderButtonsProps> = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconStyles} onClick={() => swiper.slideNext()} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;
