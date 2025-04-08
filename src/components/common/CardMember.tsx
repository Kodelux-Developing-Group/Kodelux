type MemberProps = {
  username: string;
  branch: string;
  children: React.ReactNode;
};

export const CardMember = ({ username, branch, children }: MemberProps) => {
  return (
    <div className="bg-white w-96 h-60 rounded-4xl p-5 pl-8 m-auto">
      <span className="text-black font-bold text-2xl">{username}</span>
      <p className="text-black text-xl mt-2">{branch}</p>
      <div className="flex flex-row flex-wrap [&>*]:mx-1">{children}</div>
    </div>
  );
};

/* Use
<CardMemeber username="Mr.Cube" branch="Full-Stack Developer">
          <NodeJSIcon className="w-12"/>
                <ReactIcon className="w-12"/>
                <TailWindCSSIcon className="w-12"/>
                <TypescriptIcon className="w-12"/>
                <MySQLIcon className="w-24 h-12"/>
                <PostgreSQLIcon className="w-12"/>
          </CardMemeber>
*/
