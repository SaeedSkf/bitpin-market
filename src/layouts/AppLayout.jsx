import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={
      `theme-${theme} min-h-screen flex flex-col justify-between bg-background text-text`
    }>
      <Header toggleTheme={toggleTheme} />
      <main className="container flex-grow mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div >
  )
}

export default AppLayout