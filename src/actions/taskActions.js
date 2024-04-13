export const addTask = (text) => {
    return {
      type: 'ADD_TASK',
      payload: {
        id: Math.floor(Math.random() * 1000),
        text,
      },
    };
  };
  
  export const deleteTask = (id) => {
    return {
      type: 'DELETE_TASK',
      payload: id,
    };
  };
  
  // Action to load tasks from localStorage
  export const loadTasks = (tasks) => {
    return {
      type: 'LOAD_TASKS',
      payload: tasks,
    };
  };
  