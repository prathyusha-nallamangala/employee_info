import React from 'react';
import { Task } from '../types/task';
import { updateTask, deleteTask } from '../api/taskApi';

interface TaskItemProps {
  task: Task;
  onTaskUpdated: () => void;
  onTaskDeleted: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const handleToggleComplete = async () => {
    await updateTask(task._id, { completed: !task.completed });
    onTaskUpdated();
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(task._id);
      onTaskDeleted();
    }
  };

  return (
    <div className={`flex items-center p-4 rounded-md shadow-sm ${task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'} border`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 mr-4 cursor-pointer"
      />
      <div className="flex-1">
        <h3 className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
            {task.description}
          </p>
        )}
      </div>
      <button
        onClick={handleDelete}
        className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
