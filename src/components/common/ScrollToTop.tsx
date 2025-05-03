import { ButtonScrollUpIcon } from '@/assets/icons/icons'
import { useEffect, useState } from 'react'

interface scrollToTopprops {
  className?: string
}

export default function ScrollToTop({ className } : scrollToTopprops) {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setShowButton(scrollTop >= documentHeight - 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {showButton && (
        <div className={`${className} scrolltoTop`}>
          <button
          onClick={scrollToTop}
          className="absolute bottom-20 rounded-full shadow-2xl shadow-black cursor-pointer">
            <ButtonScrollUpIcon className='w-14 h-14'></ButtonScrollUpIcon>
          </button>
        </div>
      )}
    </>

  )
}


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function BotonAgrandamiento() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
  
//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   // Variantes para la animación del botón principal
//   const buttonVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//       rotate: -45
//     },
//     animate: {
//       scale: 1,
//       opacity: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 15
//       }
//     },
//     exit: {
//       scale: 0,
//       opacity: 0,
//       rotate: 45,
//       transition: {
//         duration: 0.3
//       }
//     },
//     hover: {
//       scale: 1.1,
//       boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10
//       }
//     }
//   };

//   // Variantes para el efecto de pulso
//   const pulseVariants = {
//     initial: {
//       scale: 1,
//       opacity: 0.7
//     },
//     animate: {
//       scale: 1.5,
//       opacity: 0,
//       transition: {
//         repeat: Infinity,
//         duration: 1.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-full py-20 bg-gray-100">
//       <button
//         onClick={toggleVisibility}
//         className="mb-16 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//       >
//         {isVisible ? "Ocultar Botón" : "Mostrar Botón"}
//       </button>

//       <div className="relative">
//         <AnimatePresence>
//           {isVisible && (
//             <>
//               {/* Efecto de pulso detrás del botón */}
//               <motion.div
//                 initial="initial"
//                 animate="animate"
//                 variants={pulseVariants}
//                 className="absolute inset-0 rounded-full bg-red-500"
//                 style={{ zIndex: 0 }}
//               />
              
//               {/* Botón principal con animación de agrandamiento */}
//               <motion.button
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 whileHover="hover"
//                 whileTap={{ scale: 0.95 }}
//                 variants={buttonVariants}
//                 className="relative px-8 py-4 bg-red-500 text-white text-xl font-bold rounded-full z-10"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 ¡Haz clic!
//               </motion.button>
              
//               {/* Texto que aparece solo cuando el botón está en hover */}
//               <AnimatePresence>
//                 {isHovered && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute left-0 right-0 text-center mt-4"
//                   >
//                     <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
//                       Acción importante
//                     </span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </>
//           )}
//         </AnimatePresence>
//       </div>
      
//       {/* Mensaje informativo */}
//       <div className="mt-20 text-center max-w-md">
//         <p className="text-gray-600">
//           Este botón utiliza animaciones de escala, rotación y opacidad para crear un efecto 
//           de agrandamiento dinámico. También incluye un efecto de pulso y comportamientos 
//           interactivos al hacer hover.
//         </p>
//       </div>
//     </div>
//   );
// }