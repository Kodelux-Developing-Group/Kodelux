import { ButtonScrollUpIcon } from '@/assets/icons/icons'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

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


  const buttonVariants = {
    initial: {
      scale: 1.3
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }
  
  return (
  <>
  {showButton && (
    <div className={`${className} scrolltoTop`}>
      <div className="relative">
        <AnimatePresence>          
              <motion.button
                initial="initial"
                animate="animate"
                exit="exit"
                whileTap={{ scale: 0.9 }}
                variants={buttonVariants}
                className="fixed bottom-60 rounded-full shadow-2xl shadow-black cursor-pointer"
                onClick={scrollToTop}>
                  <ButtonScrollUpIcon className='w-14 h-14'></ButtonScrollUpIcon>
              </motion.button>
        </AnimatePresence>
      </div>
    </div>
  )}
  </>
  )
}