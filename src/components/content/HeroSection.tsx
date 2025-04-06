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
      <div className={`${styles.stats} text-7xl font-bold flex items-center`}>
        <span>{String(count).padStart(2, "0")}</span>
        <span className="pb-1">+</span>
      </div>
      <span className="text-xs text-gray-400">{description}</span>
    </li>
  );
};

export const HeroSection = () => {
  return (
    <div className="h-[calc(100vh-5em)] flex items-center justify-center flex-col">
      <div className="flex relative flex-col gap-4 items-center justify-center mb-4">
        <div className="absolute flex flex-col items-center justify-center gap-4">
          <div className={`${styles.title} text-8xl`}>Artist</div>
          <div className={`${styles.subtitle} text-9xl`}>Kodelux</div>
        </div>
        <img
          src={Escultura}
          alt=""
          className={`h-[500px] z-1 ${styles.levitating}`}
        />
      </div>
      <div>
        <ul className="flex gap-28">
          <Statistic counter="5" description="Years of Experience" />
          <Statistic counter="100" description="Satisfied Clients" />
          <Statistic counter="50" description="Projects Completed" />
          <Statistic counter="10" description="Organizations Promoted" />
        </ul>
      </div>
    </div>
  );
};
