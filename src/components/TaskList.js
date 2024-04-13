import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton,Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <List>
      {tasks.map((task) => (
        <Paper key={task.id} style={{margin:"0.3rem"}}>
        <ListItem key={task.id}>
          <ListItemText primary={task.text} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default TaskList;
