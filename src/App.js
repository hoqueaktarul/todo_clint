import React,{useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { loadTasks } from './actions/taskActions';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      dispatch(loadTasks(storedTasks));
    }
  }, [dispatch]);
  return (
    <div>
    <center>
      <h1>To-Do List</h1>
      </center>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
