import { Navbar } from "./components/layout";
import { Outlet } from "react-router-dom";
import "./styles/globals.css";
import "./styles/layout.css";

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

export default Layout;
