import { useState } from 'react'
import React from 'react'

interface ProjectsScrollXProp {
    className?: string,
    children?: React.ReactNode
}

const PROJECTCARDS_PER_PAGE = 3

export default function ProjectsScrollX ({ children } : ProjectsScrollXProp) {
    const [currentPage, setCurrentPage] = useState(1)
    const childrenArray = React.Children.toArray(children)
    const totalPages = Math.ceil(childrenArray.length / PROJECTCARDS_PER_PAGE)
    const currentItems = childrenArray.slice((currentPage - 1) * PROJECTCARDS_PER_PAGE, currentPage * PROJECTCARDS_PER_PAGE)

    const pages = []
    for (let i = 0; i < childrenArray.length; i += 3) {
        pages.push(childrenArray.slice(i, i + 3))
      }

    return (
        <>
            {currentPage > 1 && (
                <div className="z-10 absolute left-0 m-8">
                    <button disabled={currentPage === 1} className="text-[#2C2C2C] w-fit h-fit text-4xl cursor-pointer"
                    onClick={() => setCurrentPage(currentPage - 1)}>
                        ←
                    </button>
                </div>
                )}
        {currentItems.map((item, i) => (
            <div key={i} className='mx-8'>
                {item}
            </div>
        ))}
        {((childrenArray.length >= PROJECTCARDS_PER_PAGE + 1) && currentPage < totalPages) && (
            <div className="z-10 absolute right-0 m-8">
                <button disabled={currentPage === totalPages} className="text-[#2C2C2C] w-fit h-fit text-4xl cursor-pointer"
                onClick={() => setCurrentPage(currentPage + 1)}>
                    →
                </button>
            </div>
            )}
        </>
    )
}


  
//       {/* Contenedor del carrusel con overflow hidden */}
//       <div className=" mx-16"> {/* Margen para las flechas */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${currentPage * 100}%)`,
//             width: `${totalPages * 100}%`
//           }}
//         >
//           {pages.map((pageItems, pageIndex) => (
//             <div 
//               key={pageIndex} 
//               className="flex-shrink-0 flex justify-center items-center gap-8"
//               style={{ width: `${100 / totalPages}%` }}
//             >
//               {pageItems}
//             </div>
//           ))}
//         </div>
//       </div>