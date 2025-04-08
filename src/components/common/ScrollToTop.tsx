import { ButtonScrollUpIcon } from '@/assets/icons/icons'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
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
        <div className='w-screen flex justify-center'>
          <button
          onClick={scrollToTop}
          className="fixed bottom-62 right-1/2 rounded-full shadow-2xl shadow-black cursor-pointer">
            <ButtonScrollUpIcon className='w-14 h-14'></ButtonScrollUpIcon>
          </button>
        </div>
      )}
    </>

  )
}
