import { useState } from "react";
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Asd",
      day: "ma",
      reminder: true,
    },
    {
      id: 2,
      text: "Mááás",
      day: "holnap",
      reminder: true,
    },
    {
      id: 3,
      text: "xDD",
      day: "jövőre",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Hello React!" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "No Tasks To Show"}
    </div>
  );
};

export default App;
