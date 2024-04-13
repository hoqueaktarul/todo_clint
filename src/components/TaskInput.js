import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { TextField, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };
  const submittingTask=(e)=>{
    e.preventDefault()
    handleAddTask()
  }

  return (
    <form onSubmit={submittingTask}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          variant="outlined"
          label="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
        //   onClick={handleAddTask}
          startIcon={<AddIcon />}
          fullWidth
          type="submit"
        >
          Add Task
        </Button>
      </Grid>
    </Grid>
    </form>
  );
};

export default TaskInput;
