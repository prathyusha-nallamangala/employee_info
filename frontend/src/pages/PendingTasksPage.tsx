import React, { useEffect, useState, useCallback } from 'react';
import { Task } from '../types/task';
import { getTasks } from '../api/taskApi';
import TaskList from '../components/TaskList';

const PendingTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPendingTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data.filter(task => !task.completed));
      setError(null);
    } catch (err) {
      console.error('Failed to fetch pending tasks:', err);
      setError('Failed to load pending tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPendingTasks();
  }, [fetchPendingTasks]);

  if (loading) return <p className="text-center text-gray-500 mt-8">Loading pending tasks...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Pending Tasks</h2>
      <TaskList tasks={tasks} onTaskUpdated={fetchPendingTasks} onTaskDeleted={fetchPendingTasks} />
    </div>
  );
};

export default PendingTasksPage;
