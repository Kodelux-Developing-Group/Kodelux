import styles from "./styles/navbar.module.css"

export const Navbar = () => {

  return (
    <header className="h-10 w-fit float-end absolute right-0">
      <nav className="size-full flex p-8 items-center justify-end">
        <div className="lg:flex">
          <div>
            <ul className={`flex space-x-8 font-semibold text-[#FFD500] text-xs items-center ${styles.julius}`}>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
