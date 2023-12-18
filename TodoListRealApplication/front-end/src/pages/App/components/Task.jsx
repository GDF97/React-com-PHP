import React from "react";

const Task = ({ task, id, isCompleted, edit, complete, deleteTask }) => {
  let taskClasse =
    "w-full flex items-center justify-between border border-black px-2 py-1";

  if (isCompleted) {
    taskClasse += " bg-green-400";
  } else {
    taskClasse =
      "w-full flex items-center justify-between border border-black px-2 py-1 bg-white";
  }

  return (
    <div className={taskClasse}>
      <p className={isCompleted ? "line-through text-white" : "text-black"}>
        {task}
      </p>
      <div className="flex gap-4 items-center">
        <button
          className="w-7 h-7 border border-black shadow-[2px_2px_1px_#000] flex items-center justify-center bg-white"
          onClick={() => complete(id, task, isCompleted)}
        >
          <box-icon name="check"></box-icon>
        </button>
        <button
          className="w-7 h-7 border border-black shadow-[2px_2px_1px_#000] flex items-center justify-center bg-white"
          onClick={() => edit(id, isCompleted)}
        >
          <box-icon name="edit" color="#020202"></box-icon>
        </button>
        <button
          className="w-7 h-7 bg-[#1e1e1e] text-white flex justify-center items-center"
          onClick={() => deleteTask(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Task;
