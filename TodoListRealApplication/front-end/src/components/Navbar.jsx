import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";

const Navbar = () => {
  const docHTML = document.querySelector("html");
  const logo = "< Gdf97 TodoList />";
  const [open, setOpen] = useState(false);

  const fnNavbar = () => {
    setOpen(!open);
    //console.log(open);
  };

  return (
    <header className="w-full bg-white border-b-[3px] border-black px-4 py-2 flex items-center justify-between md:p-4 xl:p-6 dark:bg-zinc-950 dark:border-white">
      <nav className="flex items-baseline gap-8">
        <a href="" target="_blank" className="md:text-2xl dark:text-slate-100">
          {logo}
        </a>
        <ul className="hidden xl:flex gap-8">
          <a href="" target="_blank" className="dark:text-slate-100">
            Source Code
          </a>
          <a href="" target="_blank" className="dark:text-slate-100">
            Blog
          </a>
          <li className="dark:text-slate-100">
            {docHTML.className == "dark" ? <>Light Mode</> : <>Dark</>}
          </li>
        </ul>
      </nav>
      <div className="hidden xl:flex gap-6 items-center">
        <Link to="/Forms">
          <button className="bg-white w-36 py-1 border border-black shadow-[2px_2px_0_#000] dark:shadow-none">
            Login
          </button>
        </Link>
        <Link to="/Forms">
          <button className="bg-[#1E1E1E] py-1 text-white w-36 rounded dark:bg-blue-800">
            Register
          </button>
        </Link>
      </div>
      <nav className="relative xl:hidden">
        <button
          onClick={fnNavbar}
          className="flex items-center justify-center dark:hidden"
        >
          {!open ? (
            <box-icon name="menu"></box-icon>
          ) : (
            <box-icon name="x"></box-icon>
          )}
        </button>
        <button
          onClick={fnNavbar}
          className="hidden items-center justify-center dark:flex"
        >
          {!open ? (
            <box-icon name="menu" color="#ffffff"></box-icon>
          ) : (
            <box-icon name="x" color="#ffffff"></box-icon>
          )}
        </button>
        {open ? (
          <ul className="flex flex-col justify-between text-center absolute top-10 right-0 bg-white w-48 h-48 p-4 border border-black shadow-[4px_4px_0_#000] rounded dark:shadow-none dark:bg-zinc-950 dark:border-white">
            <li className="dark:text-slate-100">Source Code</li>
            <li className="dark:text-slate-100">Blog</li>
            <li
              className="dark:text-slate-100 dark:block hidden text-center"
              onClick={() => docHTML.classList.remove("dark")}
            >
              Light Mode
            </li>
            <li
              className="dark:hidden"
              onClick={() => docHTML.classList.add("dark")}
            >
              Dark Mode{" "}
            </li>
            <Link to="/Forms">
              <button className="bg-white w-full border border-black shadow-[2px_2px_0_#000] dark:shadow-none">
                Login
              </button>
            </Link>
            <Link to="/Forms">
              <button className="bg-[#1E1E1E] text-white w-full rounded dark:bg-blue-800">
                Register
              </button>
            </Link>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
