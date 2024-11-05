// import { useState } from "react";

// export function InputList() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (inputValue !== "") {
//       addTask(inputValue);
//       setInputValue("");
//     }
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         className="border border-gray-600 border-2 rounded p-2"
//       />
//       <button
//         onClick={handleAddTask}
//         className={`border border-2 rounded px-4 py-2 ${
//           inputValue === ""
//             ? "bg-red-500 border-red-500"
//             : "bg-white border-gray-600"
//         }`}
//         disabled={inputValue === ""}
//       >
//         Dodaj
//       </button>
//     </div>
//   );
// }

import { useState } from "react";

export function InputList({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue !== "") {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-600 border-2 rounded p-2"
      />
      <button
        onClick={handleAddTask}
        className={`border border-2 rounded px-4 py-2 ${
          inputValue === ""
            ? "bg-red-500 border-red-500"
            : "bg-white border-gray-600"
        }`}
        disabled={inputValue === ""}
      >
        Dodaj
      </button>
    </div>
  );
}
