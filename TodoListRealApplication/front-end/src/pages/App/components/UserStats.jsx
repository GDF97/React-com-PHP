import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
const docHTML = document.querySelector("html");
const UsMobile = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-between bg-white border-b-[3px] border-black p-3 relative lg:hidden dark:bg-zinc-950 dark:border-white">
      <div className="flex items-center gap-1 dark:text-white">
        <div className="w-[25px] h-[25px] bg-gray-300 rounded-full"> </div>
        <p> {props.fullname} </p>
      </div>
      <button
        className="flex justify-center items-center dark:hidden"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <box-icon name="menu"></box-icon>
        ) : (
          <box-icon name="x"></box-icon>
        )}
      </button>
      <button
        className="hidden justify-center items-center dark:flex"
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <box-icon name="menu" color="#fff"></box-icon>
        ) : (
          <box-icon name="x" color="#fff"></box-icon>
        )}
      </button>
      {open ? (
        <aside className="absolute top-[52px] left-0 w-full h-screen bg-[#1e1e1e66] ">
          <div className="flex flex-col justify-center gap-10 w-8/12 max-w-sm h-full bg-white p-4 dark:bg-zinc-950">
            <div className="w-full flex gap-2">
              <button
                className="flex-1 p-1 bg-white border border-black shadow-[2px_2px_1px_#000]"
                onClick={() => docHTML.classList.remove("dark")}
              >
                Light Mode
              </button>
              <button
                className="flex-1 p-1 bg-[#1e1e1e] text-white"
                onClick={() => docHTML.classList.add("dark")}
              >
                Dark Mode
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 dark:text-white">
                <div className="w-14 h-14 bg-white border border-black shadow-[2px_2px_0_#000] flex items-center justify-center dark:bg-gray-600">
                  {props.tfc}
                </div>
                <p>Tarefas Completes </p>
              </div>
              <div className="flex items-center gap-2 dark:text-white">
                <div className="w-14 h-14 bg-white border border-black shadow-[2px_2px_0_#000] flex items-center justify-center dark:bg-gray-600">
                  {props.tfr}
                </div>
                <p>Tarefas Restantes </p>
              </div>
              <div className="flex items-center gap-2 dark:text-white">
                <div className="w-14 h-14 bg-white border border-black shadow-[2px_2px_0_#000] flex items-center justify-center dark:bg-gray-600">
                  {props.tft}
                </div>
                <p>Tarefas no Total </p>
              </div>
            </div>
            <Link to="/">
              <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white p-2">
                Sair <box-icon name="exit" color="#fff"></box-icon>
              </button>
            </Link>
          </div>
        </aside>
      ) : null}
    </header>
  );
};

const UsDesktop = (props) => {
  return (
    <div className="hidden lg:flex flex-col w-[475px] h-fit bg-white border border-black p-8 items-center gap-10 dark:bg-gray-950">
      <div className="flex flex-col gap-1 dark:text-white">
        <div className="w-36 h-36 bg-gray-300 rounded-full "></div>
        <p className="text-center">{props.fullname}</p>
      </div>
      <div className="w-full flex gap-4">
        <button
          className="flex-1 bg-white border border-black shadow-[2px_2px_1px_#000] p-1"
          onClick={() => docHTML.classList.remove("dark")}
        >
          Ligth Mode
        </button>
        <button
          className="flex-1 text-white bg-[#1e1e1e] p-1"
          onClick={() => docHTML.classList.add("dark")}
        >
          {" "}
          Dark Mode{" "}
        </button>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white border border-black shadow-[4px_4px_1px_#000] dark:bg-gray-600 dark:text-white">
          <p className="text-center text-2xl">{props.tfc}</p>
          <p className="text-center">Tarefas Completas</p>
        </div>
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white border border-black shadow-[4px_4px_1px_#000] dark:bg-gray-600 dark:text-white">
          <p className="text-center text-2xl">{props.tfr}</p>
          <p className="text-center">Tarefas Restantes</p>
        </div>{" "}
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-white border border-black shadow-[4px_4px_1px_#000] p-1 dark:bg-gray-600 dark:text-white">
          <p className="text-center text-2xl">{props.tft}</p>
          <p className="text-center">Tarefas no Total</p>
        </div>
      </div>
      <Link to="/" className="w-full">
        <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white p-2">
          Sair <box-icon name="exit" color="#fff"></box-icon>
        </button>{" "}
      </Link>
    </div>
  );
};

const UserStats = ({ tfc, tfr, tft, fullname }) => {
  return (
    <>
      <UsMobile fullname={fullname} tfc={tfc} tfr={tfr} tft={tft} />
      <UsDesktop fullname={fullname} tfc={tfc} tfr={tfr} tft={tft} />
    </>
  );
};

export default UserStats;
