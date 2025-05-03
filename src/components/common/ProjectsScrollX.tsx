import { useState, useRef, useEffect } from 'react'
import React from 'react'

interface ProjectsScrollXProp {
    className?: string,
    children?: React.ReactNode
}

export default function ProjectsScrollX ({ children } : ProjectsScrollXProp) {
    const [currentPage, setCurrentPage] = useState(0)
    const childrenArray = React.Children.toArray(children)
    const totalPages = childrenArray.length
    const carouselRef = useRef(null)

    const move = 100 / childrenArray.length
    
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${currentPage * move}%)`
        }
    }, [currentPage])

    return (
        <div className="relative w-full 2xl:overflow-hidden">
            <div ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out" style={{ width: `${totalPages * 100}%` }}>

                {childrenArray.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center" style={{ width: `${100 / totalPages}%` }}>
                        {item}
                    </div>
                ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 2xl:flex sm:hidden hidden-xs justify-center gap-2 pb-4">
                {childrenArray.length >= 2 && childrenArray.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentPage(idx)} 
                        className={`h-2 rounded-full transition-all cursor-pointer ${currentPage === idx ? 'w-6 bg-[#2C2C2C]' : 'w-2 bg-[#2C2C2C]/50'}`}/>
                ))}
            </div>
            <div className="absolute pages button-pages left-0 right-0 show-xs sm:flex 2xl:hidden justify-center gap-2 pb-4">
                {childrenArray.length >= 2 && childrenArray.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentPage(idx)} 
                        className={`h-14 rounded-full mt-4 transition-all cursor-pointer ${currentPage === idx ? 'w-14 bg-[#2C2C2C]' : 'w-10 bg-[#2C2C2C]/50'}`}/>
                ))}
            </div>
        </div>
    )
}