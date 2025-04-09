import { BootstrapIcon, DartIcon, DotNetIcon, EmailIcon, ExpressIcon, FlutterIcon, InstagramIcon, MySQLIcon, NestJSIcon, NodeJSIcon, PostgreSQLIcon, ReactIcon, SQLServerIcon, TailWindCSSIcon, TypescriptIcon, ViteIcon } from "@/assets/icons/icons"
import styles from "../../components/layout/styles/navbar.module.css"
import ScrollToTop from '../../components/common/ScrollToTop'
import { ProjectCard } from "@/components/common/ProjectCard"
import { CardMember } from "@/components/common/CardMember"
import ProjectsScrollX from '../../components/common/ProjectsScrollX'


export const LandingPage = () => {
  return (
    <>
    <div className="w-screen h-screen bg-[#101010] mb-96 select-none">
      <div className="flex flex-col items-center h-full justify-center">
        <img src="src/assets/images/kodelux.svg" alt="Kodelux Logo"/>
        <h1 className={`${styles.julius} text-6xl mt-10 text-white `}>
          Kodelux
        </h1>

      </div>
    </div>
    <div id="projects" className="h-screen bg-amber-900 flex items-center justify-center">
      <div className="h-8/12 w-full shadow-2xl shadow-black bg-amber-300 flex items-center justify-center select-none relative">
        <ProjectsScrollX>
          <ProjectCard name="Sample Text" imageUrl="src\\assets\\\\.png" link="https://www.google.com">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="src\\assets\\\\.png" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="src\\assets\\\\.png" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="src\\assets\\\\.png" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="src\\assets\\\\.png" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>
          <ProjectCard name="Sample Text" imageUrl="src\\assets\\\\.png" link="">
            <NodeJSIcon/>
            <NodeJSIcon/>
            <NodeJSIcon/>
          </ProjectCard>

        </ProjectsScrollX>
      </div>
    </div>
    <div className=" h-screen flex flex-col items-center gap-6 justify-center mb-96">
      <div className="flex gap-10">
      <CardMember username="Joe" branch="Full-Stack Developer">
        <NodeJSIcon className="w-12 h-14"/>
        <TypescriptIcon className="w-12 h-12"/>
        <ReactIcon className="w-12 h-12"/>
        <ViteIcon className="w-12 h-12"/>
        <TailWindCSSIcon className="w-12"/>
        <MySQLIcon className="w-24 h-12"/>
        <ExpressIcon className="w-12 h-12"/>
        <NestJSIcon className="w-12 h-12"/>
      </CardMember>
      <CardMember username="Méndez" branch="Back-end Developer">
        <NodeJSIcon className="w-12 h-14"/>
        <TypescriptIcon className="w-12 h-12"/>
        <NestJSIcon className="w-12 h-12"/>
        <DartIcon className="w-12 h-12"/>
        <FlutterIcon className="w-12 h-12"/>
      </CardMember>
      <CardMember username="Melo" branch="Back-end Developer">
        <NodeJSIcon className="w-12 h-14"/>
        <TypescriptIcon className="w-12 h-12"/>
        <NestJSIcon className="w-12 h-12"/>
        <ReactIcon className="w-12 h-12"/>
        <ViteIcon className="w-12 h-12"/>
        <ExpressIcon className="w-12 h-12"/>
      </CardMember>
      <CardMember username="Mr.Cube" branch="Full-Stack Developer">
        <NodeJSIcon className="w-12 h-14"/>
        <ReactIcon className="w-12 h-12"/>
        <ViteIcon className="w-12 h-12"/>
        <TailWindCSSIcon className="w-12"/>
        <MySQLIcon className="w-24 h-12"/>
        <PostgreSQLIcon className="w-12 h-16"/>
        <ExpressIcon className="w-12 h-12"/>
        <TypescriptIcon className="w-12 h-12"/>
      </CardMember>
      </div>
      <div className="flex gap-18">
        <CardMember username="Mortem" branch="Full-Stack Developer">
          <DotNetIcon className="w-12 h-4 mt-6"/>
          <MySQLIcon className="w-24 h-12"/>
          <PostgreSQLIcon className="w-12 h-16"/>
          <TailWindCSSIcon className="w-12"/>
          <ReactIcon className="w-12 h-12"/>
          <BootstrapIcon className="w-12 h-12"/>
          <NodeJSIcon className="w-12 h-14"/>
          <SQLServerIcon className="w-12 h-12"/>
        </CardMember>
        <CardMember username="Tomy" branch="">
        </CardMember>
        <CardMember username="Jota" branch="Back-end Developer">
          <PostgreSQLIcon className="w-12 h-16"/>
        </CardMember>
      </div>
    </div>
    <div className="h-80"></div>
    <ScrollToTop/>
    <footer id="contact" className="w-screen">
      <div className="flex flex-row gap-x-16 justify-end mr-28 mb-20">
        <a href={`mailto:kodelux.ofc@gmail.com`} className="">
          <EmailIcon className="w-14"></EmailIcon>
        </a>
        <a href="">
          <InstagramIcon className="w-14"/>
        </a>
      </div>
      <div className="mx-auto w-fit">
        <span className="text-[#E0E0E0] hover:text-black transition">© Copyright Kodelux. All Rights Reserved</span>
      </div>
    </footer>
    </>
  )
}
