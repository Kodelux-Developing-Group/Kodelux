import styles from './styles/navbar.moduel.css'

export const Navbar = () => {

  return (
    <header className="h-10 w-fit float-end">
      <nav className="size-full flex p-8 items-center justify-between">
        <div className="lg:flex">
          <div>
            <ul className={`flex space-x-8 font-semibold text-xs items-center ${styles.julius}`}>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
