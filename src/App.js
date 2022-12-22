import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm';

// const INITIAL_TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  // const initialCopy = INITIAL_TASKS.map((task) => {
  //   return { ...task };
  // });
  const [taskList, setTaskList] = useState([]);
  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const tasksAPIResCopy = res.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setTaskList(tasksAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateComplete = (taskId, taskIsComplete) => {
    console.log('in updateComplete');
    const newTaskList = [];
    axios
      .patch(`${URL}/${taskId}/mark_complete`)
      .then(() => {
        for (const task of taskList) {
          if (task.id !== taskId) {
            newTaskList.push(task);
          } else {
            const newTask = {
              ...task,
              isComplete: taskIsComplete,
            };
            newTaskList.push(newTask);
          }
        }
        setTaskList(newTaskList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteTask = (taskId) => {
    console.log('deleteTask Called');
    axios
      .delete(`${URL}/${taskId}`)
      .then(() => {
        const newTaskList = [];
        for (const task of taskList) {
          if (task.id !== taskId) {
            newTaskList.push(task);
          }
        }
        setTaskList(newTaskList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTask = (newTaskInfo) => {
    axios
      .post(URL, newTaskInfo)
      .then((response) => {
        console.log(response);
        const newTasks = [...taskList];
        const newTaskJSON = {
          ...newTaskInfo,
          isComplete: false,
          id: response.data.task.id,
        };
        newTasks.push(newTaskJSON);
        setTaskList(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            deleteTask={deleteTask}
            updateComplete={updateComplete}
            tasks={taskList}
          />
        </div>
        <div>
          <NewTaskForm addTaskCallbackFunc={addTask} />
        </div>
      </main>
    </div>
  );
};

export default App;
