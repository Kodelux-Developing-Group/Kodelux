import { Logo, LogoDark } from "@/assets/icons/icons";
import { useTheme } from "@/hooks";
import styles from "./styles/HeroSection.module.css";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center flex-col select-none py-8 sm:py-4 h-[600px]">
      <div className="flex relative flex-col gap-4 items-center justify-center mb-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <figure data-test-id="logo">
            {theme === "light" ? (
              <LogoDark className="size-full" />
            ) : (
              <Logo className="size-full" />
            )}
          </figure>
          <h1 className={`text-6xl ${styles.title}`}>Kodelux</h1>
        </div>
      </div>
    </div>
  );
};
