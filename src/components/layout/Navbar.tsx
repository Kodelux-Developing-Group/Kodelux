import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import styles from './styles/navbar.module.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }


  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.3 }
  }

  const menuItems = [
    "Projects",
    "Contact"
  ]

  return (
	<>
		<header className="absolute right-0 top-0 w-full z-50 select-none">
		<nav className="flex items-center justify-end p-6">

			<ul className={`hidden lg:flex space-x-8 font-semibold text-[#FFD500] text-xs items-center ${styles.julius}`}>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
			<button
				onClick={toggleMenu}
				className={`lg:hidden text-[#FFD500] text-3xl absolute right-4 top-4 transition-opacity duration-300 ease-in-out ${isOpen? ' opacity-30 -z-10' : 'opacity-100'}`}>
					<Menu size={40}/>
			</button>

		</header>

		<div className="font-sans">

		<AnimatePresence>
			{isOpen && (
				<>
				<motion.div
				initial="closed"
				animate="open"
				exit="closed"
				variants={overlayVariants}
				className="fixed inset-0 bg-black bg-opacity-50 z-20"
				onClick={toggleMenu}
				transition={{ duration: 0.2 }}
				/>

	
				<motion.div
				initial="closed"
				animate="open"
				exit="closed"
				variants={sidebarVariants}
				className="fixed top-0 right-0 w-64 h-full bg-[#101010]/90 shadow-lg z-30"
				>
				<div className="flex flex-col h-full">

					<nav className="flex-1 overflow-y-auto">
					<ul className={`flex flex-col  mx-auto font-semibold text-3xl ${styles.julius} items-center my-5 mt-10 julius-font`}>
						{menuItems.map((item, index) => (
							<motion.li
							key={index}
							variants={itemVariants}
							className="px-6 py-3"
							>
							<a className="text-[#FFD500] font-medium block" href={`#${item.toLowerCase()}`}>{item}</a>
						</motion.li>
						))}
					</ul>
					</nav>

				</div>
				</motion.div>
			</>
			)}
		</AnimatePresence>
		</div>
	</>
  )
}