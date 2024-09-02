"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { saveAs} from "file-saver"

const Home = () => {

  const handleDownloadResume = () => {
  
    const resumeUrl = "/resume.pdf"; 
  
    fetch(resumeUrl)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, "Nelson_Malgas'_CV.pdf");
      })
      .catch(err => console.error("Download failed:", err));
  };
  
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Nelson Malgas</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a full-stack developer with a strong proficiency in
              JavaScript. My expertise spans both front-end and back-end
              development, allowing me to build comprehensive and dynamic web
              applications. I excel in creating responsive user interfaces and
              designing efficient server-side solutions, leveraging modern
              JavaScript frameworks and libraries.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" className="upeercase items-center gap-2 hover:text-white" onClick={handleDownloadResume}>
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
