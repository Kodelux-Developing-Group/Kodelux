type ProjectCardProps = {
  name: string
  link?: string
  imageUrl?: string
  children?: React.ReactNode
}

  export const ProjectCard = ({ name = 'texto de prueba', imageUrl, link, children }: ProjectCardProps) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="w-[35rem] h-[25rem] rounded-2xl overflow-hidden group cursor-pointer" style={{ boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}>
        <div className="relative h-[60%]">
          <img
            src={imageUrl}
            alt="Card"
            className="object-cover w-full h-full transition duration-300 group-hover:brightness-50"/>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ">
            <p className="text-white text-xl font-semibold">{name}</p>
          </div>
        </div>
        <div className="h-[40%] p-4 bg-[#2C2C2C] flex flex-row justify-center items-center flex-wrap [&>*]:mx-1">
          {children}
        </div>
      </div>
      </a>
    )
  }