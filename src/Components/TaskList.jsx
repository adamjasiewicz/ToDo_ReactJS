// export function TaskList({ tasks }) {
//   return (
//     <ol className="list-disc pl-5 mt-4">
//       {tasks.map((task, index) => (
//         <li key={index} className="border-b border-gray-300 py-1">
//           {task}
//           <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-200 float-right">
//             Usuń
//           </button>
//           <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded transition duration-200 float-right">
//             Zrobione
//           </button>
//         </li>
//       ))}
//     </ol>
//   );
// }

export function TaskList({ tasks, deleteTask, markTaskAsDone }) {
  return (
    <ol className="list-decimal pl-5 mt-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`border-b border-gray-300 py-2 flex justify-between items-center ${
            task.done ? "line-through text-gray-400" : ""
          }`}
        >
          <span>{task.text}</span>
          <div className="space-x-2">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded transition duration-200"
              onClick={() => markTaskAsDone(index)}
            >
              {task.done ? "Cofnij" : "Zrobione"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded transition duration-200"
              onClick={() => deleteTask(index)}
            >
              Usuń
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}
