import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

const Footer = ({ activeTasksCount, clearCompleted }) => {
  const hasCompletedTasks = activeTasksCount > 0;

  return (
    <footer className="footer">
      {}
      <span className="todo-count">
        {activeTasksCount} {activeTasksCount === 1 ? 'item' : 'items'} left
      </span>
      
      {}
      <TasksFilter />
      
      {}
      {hasCompletedTasks && (
        <button 
          className="clear-completed"
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;