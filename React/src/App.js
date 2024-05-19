import React, {useState, useEffect} from "react";
import axios from "axios";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TastForm";


const App = () =>{

  const [id, setId] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{

      axios
      .get("https://f8ihn5u237.execute-api.ap-northeast-1.amazonaws.com/production/task-list")
      .then((response)=>{
            //タスク情報を取得
        
            const responseTasks = response.data.tasks;
            let initTasks=[];
        
            responseTasks.map((responseTask) => {

            const initTask = {
                id: responseTask.id,
                taskName: responseTask.taskName
            };
            initTasks = initTasks.concat(initTask);
            console.log(initTasks);

            })
          setTasks(initTasks);
          let initId = responseTasks.length;
          setId(initId + 1);

        
      })
      .catch((error)=>{
          //エラー
          console.log(error);
      })

  },[]);
  

  //登録ボタンを押下時のイベント
  const onSave = (taskName) =>{
      const newTask = {
          id: id,
          taskName: taskName
      };

      //登録用のAPIを呼び出し
      axios.post("https://f8ihn5u237.execute-api.ap-northeast-1.amazonaws.com/production/task",newTask)
      .then((response)=>{
          console.log(response);

          //フロント側でも追加したタスクを表示する
          setId(id + 1);
          const newTasks = tasks.concat(newTask)
          setTasks(newTasks);
      })
      .catch((error)=>{
          console.log(error);
      })

  };

  const onDelete = (id) => {
      //削除用のAPIを呼び出し
      axios
      .delete("https://f8ihn5u237.execute-api.ap-northeast-1.amazonaws.com/production/task/" + id)
      .then((response)=>{
      
          //フロント側では、削除したID以外のタスクをリストとして再作成して、再セットする。
          const filteredTasks = tasks.filter((task) => task.id !== id);
          setTasks(filteredTasks);

      })
      .catch((error)=>{
          console.log(error);
      })
  };

  const onUpdate = (id, taskName) => {
  
      const updateTask = {
        id: id,
        taskName: taskName
      };

      //更新用のAPIを呼び出し
      axios
      .put("https://f8ihn5u237.execute-api.ap-northeast-1.amazonaws.com/production/task",updateTask)
      .then((response)=>{

          //更新対象のタスクを更新して、リストを作り直す
          const newTasks = tasks.map((task)=>
              task.id === id ? updateTask : task
          );
          setTasks(newTasks);
      })
      .catch((error)=>{
          console.log(error);
      })

      
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