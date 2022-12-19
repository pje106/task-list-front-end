import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const initialCopy = INITIAL_TASKS.map((task) => {
    return { ...task };
  });

  const [taskList, setTaskList] = useState(initialCopy);

  const updateComplete = (taskId, taskIsComplete) => {
    console.log('in updateComplete');
    const newTaskList = [];
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
  };

  const deleteTask = (taskId) => {
    console.log('deleteTask Called');
    const newTaskList = [];
    for (const task of taskList) {
      if (task.id !== taskId) {
        newTaskList.push(task);
      }
    }
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList deleteTask={deleteTask} updateComplete={updateComplete} tasks={taskList} />
        </div>
      </main>
    </div>
  );
};

export default App;
