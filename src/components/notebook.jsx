import { useState } from "react";

export default function NoteBook() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, { text: task, completed: false }]);
        setTask(""); 
      }
    };
  
    const toggleComplete = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    };
  
    const removeTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="p-4 max-w-lg h-[400px] mx-4 bg-fuchsia-900 shadow-lg rounded-lg flex flex-col">
          <h2 className="text-xl font-bold mb-2">{`Bae's To Do list ❤️`}</h2>
          
          {/* Input + Add Button */}
        <div className="flex mb-4 space-x-2">
            <input
            type="text"
            className="w-full p-2 sm:p-1 border rounded-lg text-base sm:text-sm md:text-lg"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            />
            <button
            onClick={addTask}
            className="shrink-0 bg-blue-500 text-white px-4 py-2 sm:px-3 sm:py-1 text-sm sm:text-xs md:text-base rounded-lg"
            >
            Add
            </button>
        </div>
    
          {/* Task List */}
          <ul className="flex-1 overflow-y-auto pr-2">
            {tasks.map((t, index) => (
              <li key={index} className="flex justify-between items-center p-2 border-b">
                <span
                  className={`flex-1 ${t.completed ? "line-through text-gray-500" : ""}`}
                  onClick={() => toggleComplete(index)}
                >
                  {t.text}
                </span>
                <button onClick={() => removeTask(index)} className="text-red-500">✖</button>
              </li>
            ))}
          </ul>
        </div>
      );
}