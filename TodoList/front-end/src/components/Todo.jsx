const Todo = ({ task, isCompleted, id, fnComplete, fnEdit, fnDelete }) => {
  if (isCompleted) console.log("completou", task);

  let classe = isCompleted ? "line-through" : "";

  return (
    <div className="w-full border border-black flex px-6 py-2 items-center justify-between">
      <p className={classe}>
        {task} {id}
      </p>
      <div className="flex gap-5">
        <button
          className="border border-black shadow-[2px_2px_0_0_#000] w-10 h-10"
          onClick={() => fnComplete(id)}
        >
          V
        </button>
        <button
          className="border border-black shadow-[2px_2px_0_0_#000] w-10 h-10"
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
