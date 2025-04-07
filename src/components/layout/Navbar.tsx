import { MoonIcon, SunIcon, Logo } from "@/assets/icons/icons";
import { useTheme } from "@/hooks";
import { OffCanvas } from "../widget";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-content h-10 sm:h-14 w-full sticky top-0 left-0 z-[100]">
      <nav
        className="size-full flex p-8 sm:px-8 items-center justify-between mx-auto max-w-7xl md:px-8"
        style={{
          background: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="hidden lg:flex items-center justify-between w-full">
          <figure data-test-id="logo">
            <Logo
              className="size-12"
              fill={theme === "light" ? "#000" : "#fff"}
            />
          </figure>
          <div className="px-4">
            <ul className="flex space-x-8 font-semibold text-xs items-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Eventos</a>
              </li>
              <li onClick={toggleTheme}>
                {theme === "light" ? (
                  <MoonIcon className="size-6" />
                ) : (
                  <SunIcon className="size-7" />
                )}
              </li>
            </ul>
          </div>
        </div>
        <OffCanvas theme={theme} />
      </nav>
    </header>
  );
};
