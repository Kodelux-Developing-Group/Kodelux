import { BootstrapIcon, DartIcon, DockerIcon, DotNetIcon, EmailIcon, ExpressIcon, FlutterIcon, InstagramIcon, MySQLIcon, NestJSIcon, NextIcon, NodeJSIcon, PostgreSQLIcon, ReactIcon, SQLServerIcon, TailWindCSSIcon, TypescriptIcon, ViteIcon } from "@/assets/icons/icons"
import styles from "../components/layout/styles/navbar.module.css"
import ScrollToTop from '../components/common/ScrollToTop'
import { ProjectCard } from "@/components/common/ProjectCard"
import { CardMember } from "@/components/common/CardMember"
import ProjectsScrollX from '../components/common/ProjectsScrollX'
import { GoldenText } from "@/components/common/GoldText"
import { useState } from "react"


export const LandingPage = () => {
  const [isGoldenText, setGoldenText] = useState(false)
  return (
    <>
    <div className="w-screen min-h-screen h-screen bg-[#101010] mb-96 select-none">
      <div className="flex flex-col items-center h-full justify-center">
        <button className="cursor-pointer" onClick={() => setGoldenText(!isGoldenText)}>
          <img src="src/assets/images/kodelux.svg" alt="Kodelux Logo"/>
        </button>
        {isGoldenText ? (
          <GoldenText>
            <h1 className={`${styles.julius} text-6xl mt-10 text-white`}>
              Kodelux
            </h1>
          </GoldenText>
        ) : (
            <h1 className={`${styles.julius} text-6xl mt-10 text-white`}>
              Kodelux
            </h1>
        )}
      </div>
    </div>
    <div className="w-1 h-[18rem]"></div>
    <div id="projects" className="h-screen w-screen flex flex-col items-center justify-center relative">
      <h2 className={`text-7xl mx-auto text-black ${styles.julius} stroke-text select-none`}>Projects</h2>
      <div className="w-9/12 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent my-4 rounded-full"/>
        <div className="2xl:h-7/12 min-w-screen 2xl:flex items-center select-none relative px-16">
          <ProjectsScrollX>
            <div className="sm:flex-col flex-div-projects sm:gap-0 flex 2xl:flex-row gap-projects flex-col justify-center items-center sm:gap-y-4 2xl:gap-8">
              <ProjectCard name="PaniMarket" imageUrl="panimarket_kodelux.png" link="">
                <NodeJSIcon className="w-12 h-12"/>
                <TypescriptIcon className="w-12 h-12"/>
                <PostgreSQLIcon  className="w-12 h-12"/>
                <ReactIcon className="w-12 h-12"/>
                <ViteIcon className="w-12 h-12"/>
                <TailWindCSSIcon className="w-12"/>
                <DockerIcon className="w-12 h-12"/>
                <NextIcon className="w-10 h-10"/>
              </ProjectCard>
              <ProjectCard  imageUrl="" link="">
              </ProjectCard>
            </div>
          </ProjectsScrollX>
        </div>
        <div className="w-9/12 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent my-4 rounded-full"/>
      </div>
      <div className="w-1 h-28"/>
    <div className="2xl:h-screen w-fit mx-auto sm:h-fit flex flex-col items-center gap-6 justify-center mb-96">
      <div className="2xl:flex m1 flex flex-row flex-wrap 2xl:gap-10 md:grid 
        md:grid-cols-2 sm:mt-96 sm:gap-5 sm:place-items-center justify-center member-cards">
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
        <TailWindCSSIcon className="w-12"/>
      </CardMember>
      <CardMember username="Cube" branch="Full-Stack Developer">
        <NodeJSIcon className="w-12 h-14"/>
        <TypescriptIcon className="w-12 h-12"/>
        <ReactIcon className="w-12 h-12"/>
        <ViteIcon className="w-12 h-12"/>
        <TailWindCSSIcon className="w-12"/>
        <MySQLIcon className="w-24 h-12"/>
        <PostgreSQLIcon className="w-12 h-16"/>
        <ExpressIcon className="w-12 h-12"/>
        <DockerIcon className="w-12 h-12"/>
      </CardMember>
        <CardMember username="Mortem" branch="Full-Stack Developer">
          <NodeJSIcon className="w-12 h-14"/>
          <MySQLIcon className="w-24 h-12"/>
          <PostgreSQLIcon className="w-12 h-16"/>
          <TailWindCSSIcon className="w-12"/>
          <ReactIcon className="w-12 h-12"/>
          <BootstrapIcon className="w-12 h-12"/>
          <SQLServerIcon className="w-12 h-12"/>
          <DotNetIcon className="w-12 h-4 mt-6"/>
          <DockerIcon className="w-12 h-12"/>
        </CardMember>
        <CardMember username="Json" branch="Back-end Developer">
          <NodeJSIcon className="w-12 h-14"/>
          <TypescriptIcon className="w-12 h-12"/>
          <ReactIcon className="w-12 h-12"/>
          <PostgreSQLIcon className="w-12 h-16"/>
          <MySQLIcon className="w-24 h-12"/>
          <DockerIcon className="w-12 h-12"/>
        </CardMember>
        <CardMember>
        </CardMember>
      </div>
    </div>
    <div className="2xl:h-96"></div>
    <div className="2xl:h-10"></div>
    <div className="relative mx-auto w-fit">
      <ScrollToTop/>
    </div>
    <footer id="contact" className="w-screen">
      <div className="social-networks">
        <a href={`mailto:kodelux.ofc@gmail.com`} 
        rel="noopener noreferrer" 
        className="">
          <EmailIcon className="w-14"></EmailIcon>
        </a>
        <a href="https://www.instagram.com/kodelux_team/"
          target="_blank"
          rel="noopener noreferrer"
          className="">
          <InstagramIcon className="w-14"/>
        </a>
      </div>
      <div className="mx-auto w-fit">
        <span className="text-[#E0E0E0] hover:text-black transition copy-text">© Copyright Kodelux. All Rights Reserved</span>
      </div>
    </footer>
    </>
  )
}
