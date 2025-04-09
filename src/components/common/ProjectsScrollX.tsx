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
    
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${currentPage * 25}%)`
        }
    }, [currentPage])

    return (
        <div className="relative w-full overflow-hidden">
            <div ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out" style={{ width: `${totalPages * 100}%` }}>

                {childrenArray.map((page, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center" style={{ width: `${100 / totalPages}%` }}>
                        {page}
                    </div>
                ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
                {childrenArray.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrentPage(idx)} 
                        className={`h-2 rounded-full transition-all ${currentPage === idx ? 'w-6 bg-[#2C2C2C]' : 'w-2 bg-[#2C2C2C]/50'}`}/>
                ))}
            </div>
        </div>
    )
}