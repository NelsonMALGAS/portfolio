"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: number }): void => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
      }}
      className="min-h-screen flex items-center py-12 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* Project Details Section */}
          <motion.div
            key={project.num}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 mt-8 lg:mt-0"
          >
            {/* Project Number */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-outline text-transparent leading-none">
                {project.num}
              </span>
              <div className="flex flex-col">
                <Badge
                  variant="secondary"
                  className="w-fit mb-2 text-xs sm:text-sm px-3 py-1"
                >
                  {project.category}
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground capitalize">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs sm:text-sm text-foreground px-3 py-1.5 hover:bg-accent transition-colors duration-200"
                  >
                    {item.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="border-t border-border mb-8" />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      className="w-full sm:w-auto group relative overflow-hidden"
                    >
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <span>Live Project</span>
                          <BsArrowUpRight className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                        </span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View live project on a anew tab</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="default"
                      className="w-full sm:w-auto group"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <BsGithub className="text-lg group-hover:scale-110 transition-transform duration-200" />
                          <span className="text-foreground">GitHub</span>
                        </span>
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View source code on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>

          {/* Swiper/Image Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full h-full">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full group"
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 group-hover:from-black/70 transition-all duration-300" />

                    {/* Project Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={`${item.title} - ${item.category} project screenshot`}
                        priority={index === 0}
                      />
                    </div>

                    {/* Project Title Overlay (visible on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}

              {/* Navigation Buttons */}
              <WorkSliderButtons />
            </Swiper>

            {/* Project Counter */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${index === projects.findIndex((p) => p.num === project.num)
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;