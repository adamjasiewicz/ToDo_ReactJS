// import { useState } from "react";
// import { InputList } from "./Components/InputList";
// import { List } from "./Components/List";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks((prevTasks) => [...prevTasks, task]);
//   };
//   return (
//     <div className="bg-white w-[500px] mt-[10vh] rounded p-10">
//       <h1 className="text-3xl">Do zrobienia</h1> <br />
//       <h2>Liczba zadań: {tasks.length}</h2>
//       <InputList addTask={addTask} />
//       <TaskList tasks={tasks} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import { InputList } from "./Components/InputList";
// import { TaskList } from "./Components/TaskList";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks((prevTasks) => [...prevTasks, task]);
//   };

//   return (
//     <div className="bg-white w-[500px] mt-[10vh] rounded p-10">
//       <h1 className="text-3xl">Do zrobienia</h1> <br />
//       <h2>Liczba zadań: {tasks.length}</h2>
//       <InputList addTask={addTask} />
//       <TaskList tasks={tasks} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { InputList } from "./Components/InputList";
import { TaskList } from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Funkcja dodawania zadania
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { text: task, done: false }]);
  };

  // Funkcja usuwania zadania
  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  // Funkcja oznaczania zadania jako "zrobione"
  const markTaskAsDone = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="bg-white w-[500px] mt-[10vh] rounded p-10">
      <h1 className="text-3xl">Do zrobienia</h1> <br />
      <h2>Liczba zadań: {tasks.length}</h2>
      <InputList addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        markTaskAsDone={markTaskAsDone}
      />
    </div>
  );
}

export default App;
