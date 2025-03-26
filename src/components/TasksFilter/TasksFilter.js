import React from 'react';
import './TasksFilter.css'

const TasksFilter = ({ currentFilter, setFilter }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' }
  ];

  return (
    <ul className="filters">
      {filters.map(({ id, label }) => (
        <li key={id}>
          <button
            className={currentFilter === id ? 'selected' : ''}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksFilter;