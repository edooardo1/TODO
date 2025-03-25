import React from 'react';
import Task from '../Task/Task';
import './TasksList.css';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;