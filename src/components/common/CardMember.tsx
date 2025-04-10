type MemberProps = {
  username: string
  branch?: string
  children?: React.ReactNode
  className?: string
}

export const CardMember = ({ username, branch, children, className }: MemberProps) => {
  return (
    <>
    <div className={`bg-white sm:hidden lg:flex lg:flex-col w-96 h-60 rounded-4xl p-5 pl-8 shadow-2xl ${className}`}>
      <span className="text-black font-bold text-2xl">{username}</span>
      <p className="text-black text-xl mt-2 mb-4">{branch}</p>
      <div className="flex flex-row flex-wrap [&>*]:mx-1">{children}</div>
    </div>
    <div className={`bg-white sm:basis-1/2 sm:visible lg:hidden w-72 h-32 rounded-4xl p-5 pl-8 m-auto shadow-2xl ${className}`}>
      <span className="text-black font-bold text-4xl">{username}</span>
      <p className="text-black text-xl mt-2 mb-4">{branch}</p>
    </div>
    </>
  )
}