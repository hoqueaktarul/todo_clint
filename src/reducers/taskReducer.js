const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = action.payload;
        const updatedTasks = [...state.tasks, newTask];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        return {
          ...state,
          tasks: updatedTasks,
        };
      case 'DELETE_TASK':
        const taskId = action.payload;
        const filteredTasks = state.tasks.filter((task) => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        return {
          ...state,
          tasks: filteredTasks,
        };
      case 'LOAD_TASKS':
        return {
          ...state,
          tasks: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  