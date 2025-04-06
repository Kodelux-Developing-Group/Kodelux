export const Navbar = () => {
  return (
    <header className='bg-content h-10 sm:h-14 w-full sticky top-0 left-0 dark:text-white z-[100]'>
      <nav className='size-full flex p-2 items-center justify-between mx-auto max-w-7xl'>
        <div className="hidden lg:flex items-center justify-between w-full">
          <figure data-test-id="logo">
            <img src="" alt="" className='size-10'/>
          </figure>
          <div className='px-4'>
            <ul className='flex space-x-8 font-semibold text-xs'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Eventos</a></li>
            </ul> 
          </div>
        </div>
      </nav>
    </header>
  )
}
