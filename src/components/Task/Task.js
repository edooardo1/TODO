import React from 'react';
import './Task.css';

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">{task.created}</span>
        </label>
        <button 
          className="icon icon-edit"
        ></button>
        <button 
          className="icon icon-destroy"
          onClick={() => deleteTask(task.id)}
        ></button>
      </div>
    </li>
  );
};

export default Task;