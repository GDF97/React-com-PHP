const Todo = ({ task, isCompleted, id, fnComplete, fnEdit, fnDelete }) => {
  let classeTarefa = isCompleted ? "line-through text-white" : "";
  let classeDiv =
    "w-full border border-black flex px-6 py-2 items-center justify-between";

  if (isCompleted) {
    classeDiv += " bg-green-500";
  } else {
    classeDiv =
      "w-full border border-black flex px-6 py-2 items-center justify-between";
  }

  return (
    <div className={classeDiv}>
      <p className={classeTarefa}>{task}</p>
      <div className="flex gap-5">
        <button
          className="border bg-white border-black shadow-[2px_2px_0_0_#000] w-10 h-10"
          onClick={() => fnComplete(id, isCompleted)}
        >
          V
        </button>
        <button
          className="border bg-white border-black shadow-[2px_2px_0_0_#000] w-10 h-10"
          onClick={() => fnEdit(id)}
        >
          E
        </button>
        <button
          className="bg-[#1e1e1e] text-white w-10 h-10"
          onClick={() => fnDelete(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
