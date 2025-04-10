type ProjectCardProps = {
  name?: string
  link?: string
  imageUrl?: string
  children?: React.ReactNode
}

  export const ProjectCard = ({ name = 'Coming soon...', imageUrl, link, children }: ProjectCardProps) => {
    return (
      <>
      <div className="sm:hidden 2xl:block 2xl:visible 2xl:my-[80px] w-[30rem] h-[20rem] rounded-2xl overflow-hidden group cursor-pointer" style={{ boxShadow: '0 0 50px rgba(0,0,0,0.5)'}}>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative h-[60%] group-hover:bg-black/50 transition duration-300">
          <img src={imageUrl? imageUrl : 'src\\assets\\images\\Escultura.png'}
            alt="Project Image"
            className="object-cover w-full h-full transition duration-300 group-hover:brightness-50"/>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-xl font-semibold">{name}</p>
          </div>
        </div>
        <div className="h-[40%] p-4 bg-[#2C2C2C] flex flex-row justify-center items-center flex-wrap [&>*]:mx-1">
          {children}
        </div>
        </a>
      </div>
      <div className="invisible sm:visible 2xl:hidden w-[25rem] h-[12rem] rounded-2xl overflow-hidden group cursor-pointer">
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative h-[100%] bg-black/50">
          <img src={imageUrl? imageUrl : 'src\\assets\\images\\Escultura.png'}
            alt="Project Image"
            className="object-cover w-full h-full transition duration-300 brightness-50"/>
          <div className="absolute inset-0 flex items-center justify-center transition duration-300">
            <p className="text-white font-semibold text-4xl">{name}</p>
          </div>
        </div>
        </a>
      </div>
      </>
    )
  }