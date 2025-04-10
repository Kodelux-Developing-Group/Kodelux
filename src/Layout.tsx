import { Navbar } from "./components/layout"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Layout