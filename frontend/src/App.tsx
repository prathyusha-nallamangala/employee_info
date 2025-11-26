import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllTasksPage from './pages/AllTasksPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import PendingTasksPage from './pages/PendingTasksPage';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4 max-w-2xl bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Task Manager</h1>
        <TaskForm />
        <nav className="mb-6 flex justify-center space-x-4 bg-gray-50 p-2 rounded-md">
          <Link to="/" className="px-4 py-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200">All Tasks</Link>
          <Link to="/pending" className="px-4 py-2 text-yellow-600 hover:text-yellow-800 hover:bg-yellow-50 rounded-md transition-colors duration-200">Pending</Link>
          <Link to="/completed" className="px-4 py-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-md transition-colors duration-200">Completed</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AllTasksPage />} />
          <Route path="/pending" element={<PendingTasksPage />} />
          <Route path="/completed" element={<CompletedTasksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
