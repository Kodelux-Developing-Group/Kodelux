import { Escultura } from "@/assets/images"

type ProjectCardProps = {
  name?: string
  link?: string
  imageUrl?: string
  children?: React.ReactNode
}

  export const ProjectCard = ({ name = 'Coming soon', imageUrl, link, children }: ProjectCardProps) => {
    return (
      <>
      <div className="project-cards m1 2xl:block 2xl:visible 2xl:my-[80px] w-[30rem] h-[20rem] rounded-2xl overflow-hidden group cursor-pointer" style={{ boxShadow: '0 0 50px rgba(0,0,0,0.5)'}}>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative h-[60%] h100 group-hover:bg-black/50 transition duration-300">
          <img src={imageUrl? imageUrl : Escultura}
            alt="Project Image"
            className="object-cover w-full h-full transition duration-300 group-hover:brightness-50 transparent50"/>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 opacity100 group-hover:opacity-100 transition duration-300">
            <p className="text-white text-2xl font-semibold text-project-card">{name}</p>
          </div>
        </div>
        <div className="hidden-xs h0 h-[40%] p-4 bg-[#2C2C2C] flex flex-row justify-center items-center flex-wrap [&>*]:mx-1">
          {children}
        </div>
        </a>
      </div>
      </>
    )
  }