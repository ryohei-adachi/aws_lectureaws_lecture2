import React, {useState, useEffect} from "react";
import axios from "axios";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TastForm";

const App = () =>{

  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{

  });
  

  const onSave = (content) =>{
    const newTask = {
      id: id,
      content: content
    };
    setId(id + 1);
    const newTasks = tasks.concat(newTask)
    setTasks(newTasks);

  };

  const onDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const onUpdate = (id, content) => {
    const newTasks = tasks.map((task)=>
      task.id === id ? { id:id, content:content } : task
    );
    setTasks(newTasks);
  }

  return (
    <div className="content">
        <h3>タスクを追加</h3>
        <TaskForm onSave={onSave} />
        <h3>{`残タスク数: ${tasks.length}`}</h3>
        <TaskList tasks={tasks} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;