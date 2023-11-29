import { useEffect, useState } from "react";

import Todo from "./components/Todo";

function App() {
  const [task, setTask] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  const fetchData = async () => {
    const configAPI = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const url =
      "http://localhost/React+PHP/TodoList/back-end/php/api/SelectAPI.php";

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      const arr = [];
      data.forEach((element) => {
        arr.push({
          id: element.id_tarefa,
          text: element.nm_tarefa,
          isCompleted: element.isCompleted,
        });
      });
      setListOfTasks(arr);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("useEffect is running");
    fetchData();
  }, []);

  const fnAddTodo = async (tarefa) => {
    if (!tarefa) return;

    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tarefa }),
    };
    const url =
      "http://localhost/React+PHP/TodoList/back-end/php/api/InsertAPI.php";

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    setTask("");
    fetchData();
  };

  const fnCompleteTodo = async (id, todoStatus) => {
    let isCompleted = !todoStatus;

    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, isCompleted }),
    };
    const url =
      "http://localhost/React+PHP/TodoList/back-end/php/api/CompleteAPI.php";

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    fetchData();
  };

  const fnEditTodo = async (id) => {
    let tarefa = prompt("Atualize o nome da tarefa");
    if (!tarefa) return;

    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, tarefa }),
    };

    const url =
      "http://localhost/React+PHP/TodoList/back-end/php/api/UpdateAPI.php";

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    fetchData();
  };

  const fnDeleteTodo = async (id) => {
    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };
    const url =
      "http://localhost/React+PHP/TodoList/back-end/php/api/DeleteAPI.php";

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    fetchData();
  };

  return (
    <div className="container min-w-full min-h-screen flex gap-32 bg-[#fcfcfc] p-12">
      <div className="w-[28rem] bg-slate-50 border border-black flex flex-col gap-8 items-center p-8">
        <div className="w-48 h-48 rounded-full border border-black"></div>
        <div className="text-center flex flex-col gap-1">
          <p className="text-2xl">Pedro Henrique Silva</p>
          <p className="text-sm">pedro@gmail.com</p>
        </div>
        <div className="w-full mt-8 flex justify-between">
          <div className="flex flex-col justify-center gap-1 w-28 h-28 p-2 border border-black text-center bg-white shadow-[4px_4px_0_1px_#000]">
            <p className="text-2xl">
              {
                listOfTasks.filter((task) => (task.isCompleted ? task : null))
                  .length
              }
            </p>
            <p className="text-sm"> Tarefas Completadas </p>
          </div>
          <div className="flex flex-col justify-center gap-1 w-28 h-28 p-2 border border-black text-center bg-white shadow-[4px_4px_0_1px_#000]">
            <p className="text-2xl">
              {listOfTasks.length -
                listOfTasks.filter((task) => (task.isCompleted ? task : null))
                  .length}
            </p>
            <p className="text-sm"> Tarefas Restantes</p>
          </div>
          <div className="flex flex-col justify-center gap-1 w-28 h-28 p-2 border border-black text-center bg-white shadow-[4px_4px_0_1px_#000]">
            <p className="text-2xl"> {listOfTasks.length} </p>
            <p className="text-sm"> Tarefas no Total </p>
          </div>
        </div>
      </div>
      <div className="w-[36rem] flex flex-col gap-14">
        <div className="flex items-center gap-8">
          <input
            type="text"
            className="flex-1 outline-none p-1 border border-black shadow-[4px_4px_0_1px_#000]"
            placeholder="Insira uma tarefa..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-[#1e1e1e] text-white px-4 py-1 h-full rounded-md"
            onClick={() => fnAddTodo(task)}
          >
            Adicionar Tarefa +
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {listOfTasks.map((task) => (
            <Todo
              task={task.text}
              id={task.id}
              isCompleted={task.isCompleted}
              fnComplete={fnCompleteTodo}
              fnEdit={fnEditTodo}
              fnDelete={fnDeleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
