import styles from "./styles/HeroSection.module.css";
import { Escultura } from "@/assets/images";

interface StatisticProps {
  counter: string;
  description: string;
}

import { useEffect, useState } from "react";

interface StatisticProps {
  counter: string; // Máximo valor como string
  description: string;
}

const Statistic = ({ counter, description }: StatisticProps) => {
  const max = parseInt(counter, 10);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= max) clearInterval(interval);
    }, 200);
    return () => clearInterval(interval);
  }, [max]);

  return (
    <li className="flex flex-col items-center">
      <div
        className={`${styles.stats} text-[clamp(1rem,6vw,4rem)] font-bold flex items-center`}
      >
        <span>{String(count).padStart(2, "0")}</span>
        <span className="pb-1">+</span>
      </div>
      <span className=" text-gray-400 text-[clamp(0.25rem,2vw,0.75rem)] text-center">
        {description}
      </span>
    </li>
  );
};

export const HeroSection = () => {
  return (
    <div className="flex items-center justify-center flex-col select-none py-8 sm:py-4">
      <div className="flex relative flex-col gap-4 items-center justify-center mb-4">
        <div className="absolute flex flex-col items-center justify-center">
          <div className={`${styles.subtitle} text-[clamp(1.5rem,4vw,4.5rem)]`}>
            Artist
          </div>
          <div className={`${styles.title} text-[clamp(2.25rem,7vw,8rem)]`}>
            Kodelux
          </div>
        </div>
        <img
          src={Escultura}
          draggable={false}
          alt=""
          className={`h-[clamp(200px,40vw,500px)] z-1 ${styles.levitating}`}
        />
      </div>
      <ul className="flex px-4 space-x-10 sm:space-x-20 lg:space-x-32 sm:px-0">
        <Statistic counter="5" description="Years of Experience" />
        <Statistic counter="100" description="Satisfied Clients" />
        <Statistic counter="50" description="Projects Completed" />
        <Statistic counter="10" description="Organizations Promoted" />
      </ul>
    </div>
  );
};
