import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Adjust pt-20 if your navbar height changes */}
      <main className="flex-1 pt-20 dark:bg-gray-900 ">
        <Outlet />
      </main>w

      <Footer />
    </div>
  );
};

export default Layout;