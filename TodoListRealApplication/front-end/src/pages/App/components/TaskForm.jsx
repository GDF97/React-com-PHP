import React, { useState } from "react";

const TaskForm = ({ add }) => {
  const [task, setTask] = useState("");
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="insira uma tarefa..."
        className="flex-1 p-1 border border-black outline-none"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="flex items-center justify-center bg-[#1e1e1e] text-white px-2 text-lg md:hidden"
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
        className="hidden md:flex items-center justify-center bg-[#1e1e1e] text-white px-2 text-lg "
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
