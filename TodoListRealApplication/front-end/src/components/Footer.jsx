import React from "react";

export const Footer = () => {
  const data = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 w-full p-2 flex items-center justify-center bg-white border-t-[3px] border-black md:p-4 xl:p-6 dark:border-white dark:text-slate-100 dark:bg-zinc-950">
      © {data} Pedro Silva. All Rights Reserved.
    </footer>
  );
};
