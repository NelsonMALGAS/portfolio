"use client";

import CountUp from "react-countup";
import stats from "@/data/stats";

const Stats = () => {
  return (
    <section className="pt-2 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, i) => {
            return (
              <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={i}>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={3}
                  className="text-4xl xl:text-5xl font-bold"
                />
                <p className="text-2xl xl:text-3xl font-extrabold">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
