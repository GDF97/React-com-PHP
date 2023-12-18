import React, { useEffect, useState } from "react";
import UserStats from "./components/UserStats";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import { API_URL } from "../../constants";
import { Navigate } from "react-router-dom";

const Aplication = ({ id_usuario }) => {
  if (!id_usuario) return <Navigate to="/Forms" />;
  const emptyArr = [];
  const [listOfTasks, setListOfTasks] = useState([]);
  const nameofuser = "Pedro Silva";
  const userId = id_usuario;

  const fetchData = async () => {
    const configAPI = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const url = `${API_URL}/actions/selectTasks.php?idUsuario=${userId}`;

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      const arr = [];
      if (data.length > 0) {
        data.forEach((element) => {
          arr.push({
            id: element.id_tarefa,
            isCompleted: element.isCompleted,
            task: element.nm_tarefa,
          });
        });
        console.log(arr);
        setListOfTasks(arr);
      } else {
        setListOfTasks(emptyArr);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTask = async (task) => {
    if (!task) return;

    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task, userId }),
    };

    const url = `${API_URL}/actions/insertTask.php`;

    try {
      const response = await fetch(url, configAPI);
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    fetchData();
  };

  const deleteTask = async (id) => {
    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    };

    const url = `${API_URL}/actions/deleteTask.php`;

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }

    fetchData();
  };

  const updateTask = async (id, tarefa, todoStatus) => {
    const configAPI = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, tarefa, todoStatus }),
    };

    const url = `${API_URL}/actions/updateTask.php`;

    try {
      const response = await fetch(url, configAPI);
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }

    fetchData();
  };

  const completeTask = (id, tarefa, todoStatus) => {
    let newTodoStatus = !todoStatus;
    console.log(newTodoStatus);
    updateTask(id, tarefa, newTodoStatus);
  };

  const editTask = (id, todoStatus) => {
    let newValue = prompt("Insira o novo valor da tarefa");
    if (!newValue) return;
    updateTask(id, newValue, todoStatus);
  };

  return (
    <div className="relative w-full min-h-screen lg:flex lg:p-12 gap-4 lg:justify-center">
      <UserStats
        fullname={nameofuser}
        tfc={
          listOfTasks.filter((task) => (task.isCompleted ? task : null)).length
        }
        tfr={
          listOfTasks.length -
          listOfTasks.filter((task) => task.isCompleted).length
        }
        tft={listOfTasks.length}
      />
      <div className="w-full h-full flex flex-col gap-4 p-6 lg:max-w-2xl">
        <TaskForm add={addTask} />
        <div className="w-full overflow-y-auto h-96 lg:h-[600px] p-2 flex flex-col gap-4">
          {listOfTasks.map((task, index) => (
            <Task
              task={task.task}
              id={task.id}
              isCompleted={task.isCompleted}
              complete={completeTask}
              edit={editTask}
              deleteTask={deleteTask}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aplication;
