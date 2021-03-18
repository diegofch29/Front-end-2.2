import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks.js'
import React,{ useEffect, useState } from 'react';
import Axios from 'axios';


function App() {

  const [tasks,setTasks] = useState([]);
  
  useEffect(()=>{
  Axios.get("https://ieti-task-api-diego.azurewebsites.net/api/list-tasks?code=cw5WhqxwZ3nQW3ABmHz2M3JQ7XqGHi0zEuUPgbItM0ika87WSHPWAQ==").then(response=>{
    setTasks(response.data)
  }).catch(error=>{
    alert(error)
  });
},[]);

  return (
    <div>
      <Tasks items={tasks}/>
    </div>
  );
}

export default App;
