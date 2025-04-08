import { EmailIcon, InstagramIcon } from "@/assets/icons/icons"
import styles from "../../components/layout/styles/navbar.module.css"
import ScrollToTop from '../../components/common/ScrollToTop'


export const LandingPage = () => {
  return (
    <>
    <div className="w-screen h-screen bg-[#101010] mb-96">
      <div className="flex flex-col items-center h-full justify-center">
        <img src="src/assets/images/kodelux.svg" alt="Kodelux Logo"/>
        <h1 className={`${styles.julius} text-6xl mt-10 text-white `}>
          Kodelux
        </h1>

      </div>
    </div>
    <div id="projects" className="h-screen bg-amber-900 flex items-center justify-center">
      <div className="h-8/12 w-full shadow-2xl shadow-black bg-amber-300 flex items-center justify-center">
      </div>
    </div>
    <div className="bg-red-400 h-screen">

    </div>
    <ScrollToTop/>
    <footer id="contact" className="w-screen ">
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
