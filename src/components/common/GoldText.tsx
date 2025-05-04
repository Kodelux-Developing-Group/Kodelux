import { useState, useEffect, ReactElement } from 'react'
import { motion } from 'framer-motion'

interface GoldenTextProp {
    children?: ReactElement | string,
    className?: string
}

export const GoldenText = ({ children, className } : GoldenTextProp) => {
  const [animationPhase, setAnimationPhase] = useState(0)
  
  useEffect(() => {
    let startTime: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const phase = (elapsed % 4000) / 4000
      setAnimationPhase(phase)
      requestAnimationFrame(animate)
    }
    
    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <motion.div 
      className={`relative ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <motion.div
        className="font-bold"
        style={{
          backgroundImage: `linear-gradient(
            90deg, 
            #462523 0%, 
            #cb9b51 20%, 
            #f6e27a 45%,
            #f6f2c0 50%,
            #f6e27a 55%,
            #cb9b51 80%,
            #462523 100%
          )`,
          backgroundSize: '200% 100%',
          backgroundPosition: `${200 -animationPhase * 200}% 0%`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0px 0px 4px rgba(246, 226, 122, 0.3)',
        }}>
        {children}
      </motion.div>
    </motion.div>
  )
}