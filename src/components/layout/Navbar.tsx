import { useState } from 'react'
import styles from './styles/navbar.module.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute right-0 top-0 w-full z-50">
      <nav className="flex items-center justify-end p-6">
        
        <button onClick={() => setIsOpen(true)}
          className="lg:hidden text-[#FFD500] text-3xl">
          ☰
        </button>

        <ul className={`hidden lg:flex space-x-8 font-semibold text-[#FFD500] text-xs items-center ${styles.julius}`}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="flex-1 bg-black/30"
            onClick={() => setIsOpen(false)}/>

          <div className="sm:w-3/6 max-w-xs bg-black h-full shadow-lg transition-transform duration-300 ease-in-out translate-x-0">
            <div className="p-8 flex flex-col gap-6 sm:gap-10 items-end">
              <a href="#projects" className={`text-[#FFD500] mx-auto font-semibold sm:text-4xl text-sm inline-block ${styles.julius}`}>
                Projects
              </a>
              <a href="#contact" className={`text-[#FFD500] mx-auto font-semibold sm:text-4xl text-sm inline-block ${styles.julius}`}>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
