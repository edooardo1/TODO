import React, { useState } from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
import './app.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Completed task', completed: true, created: '17 seconds ago' },
    { id: 2, description: 'Editing task', completed: false, created: '5 minutes ago' },
    { id: 3, description: 'Active task', completed: false, created: '5 minutes ago' },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = (description) => {
    const newTask = {
      id: Date.now(), 
      description,
      completed: false,
      created: 'just now'
    };
    setTasks([...tasks, newTask]);
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const activeTasksCount = tasks.filter(task => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      
      <section className="main">
        <TaskList 
          tasks={tasks} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      </section>
      
      {tasks.length > 0 && (
        <Footer 
          activeTasksCount={activeTasksCount} 
          clearCompleted={clearCompleted} 
        />
      )}
    </section>
  );
};

export default App;