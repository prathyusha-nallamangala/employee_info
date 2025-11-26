import React, { useState } from 'react';
import { createTask } from '../api/taskApi';

interface TaskFormProps {
  onTaskAdded?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      await createTask({ title, description });
      setTitle('');
      setDescription('');
      if (onTaskAdded) {
        onTaskAdded();
      }
      // A simple reload to refresh the list, a better approach would be state management
      window.location.reload(); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-4 bg-blue-50 rounded-md shadow-inner">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Optional description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
