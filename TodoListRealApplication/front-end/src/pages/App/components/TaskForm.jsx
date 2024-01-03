import React, { useState } from "react";

const TaskForm = ({ add }) => {
  const [task, setTask] = useState("");
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="insira uma tarefa..."
        className="flex-1 p-1 border border-black outline-none dark:border-white dark:bg-zinc-950 dark:text-slate-50"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="flex items-center justify-center bg-[#1e1e1e] text-white px-2 text-lg md:hidden dark:bg-blue-800"
        onClick={() => {
          console.log(task);
          add(task);
          setTask("");
        }}
      >
        {" "}
        Adicionar Task +{" "}
      </button>
      <button
        className="hidden md:flex items-center justify-center bg-[#1e1e1e] text-white px-2 text-lg dark:bg-blue-800"
        onClick={() => {
          console.log(task);
          add(task);
          setTask("");
        }}
      >
        Adicionar Task +
      </button>
    </div>
  );
};

export default TaskForm;
