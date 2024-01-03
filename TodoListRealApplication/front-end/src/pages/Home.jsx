import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      <div className="w-full px-8 py-12 flex flex-col items-center gap-6 md:mt-24 md:gap-8">
        <h1 className="text-[32px] text-center md:text-5xl dark:text-slate-100">
          TodoList do GDF97
        </h1>
        <p className="text-sm text-justify max-w-sm md:text-xl md:max-w-xl  dark:text-slate-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error neque
          distinctio accusantium, laudantium, impedit optio architecto tenetur
          similique perferendis earum sint aperiam mollitia nemo fuga labore
          quam, deleniti quos repellendus.
        </p>
        <Link to="/Forms">
          <button className="bg-[#1e1e1e] text-white rounded px-6 py-1 flex items-center gap-1 dark:bg-blue-800">
            Acessar TodoList{" "}
            <box-icon
              name="right-arrow-alt"
              color="rgba(255,255,255,1)"
            ></box-icon>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
