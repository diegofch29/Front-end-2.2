import React from 'react';
import axios  from axios;

const url = "";

export function getTasks(){
    axios.get("http://ieti-task-api-diego.azurewebsites.net/api/list-tasks?code=cw5WhqxwZ3nQW3ABmHz2M3JQ7XqGHi0zEuUPgbItM0ika87WSHPWAQ==").then(response=>{
    let tasks = response.data.response
  }).catch(error=>{
    alert(error)
  });

  return
}