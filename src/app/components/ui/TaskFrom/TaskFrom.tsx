import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
  Box,
  Typography,
  SelectChangeEvent,
  ButtonGroup,
  Button,
} from '@mui/material';
import React, { useState } from 'react';

import styles from './TaskFrom.module.scss';

interface TaskFormProps {
  resetAction?: () => void;
}

interface TaskType {
  title: string;
  priority: 'low' | 'medium' | 'high';
  description?: string;
}

const PRIORITY = [
  { id: 0, label: 'Low', value: 'low' },
  { id: 1, label: 'Medium', value: 'medium' },
  { id: 2, label: 'High', value: 'high' },
];

const TaskFrom: React.FC<TaskFormProps> = ({ resetAction }) => {
  const [newTask, setNewTask] = useState<TaskType>({} as TaskType);
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { value, name } = target;
    setNewTask((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSelectChange = (ev: SelectChangeEvent): void => {
    const { target } = ev;
    const { value, name } = target;
    setNewTask((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSumbit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
  };
  const handleReset: React.FormEventHandler<HTMLFormElement> = (): void => {
    if (resetAction) {
      resetAction();
    }
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSumbit}
      onReset={handleReset}
      direction="column"
      spacing={2}
    >
      <TextField
        onChange={handleChange}
        name="title"
        value={newTask.title ?? ''}
        size="small"
        label="Task name"
      />
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Task priority</InputLabel>
        <Select
          value={newTask.priority ?? ''}
          onChange={handleSelectChange}
          name="priority"
          labelId="demo-simple-select-label"
          label="Task priority"
        >
          {PRIORITY.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className={styles.Textarea}>
        <Typography fontSize="0.75em" className={styles.Textarea_label}>
          Task description
        </Typography>
        <TextareaAutosize
          value={newTask.description ?? ''}
          onChange={handleChange}
          name="description"
          aria-label="Task description"
          minRows={3}
          maxRows={15}
          className={styles.Textarea_input}
        />
      </Box>
      <ButtonGroup sx={{ marginTop: 3 }}>
        <Button type="submit">Submit</Button>
        <Button type="reset" color="error">Cancel</Button>
      </ButtonGroup>
    </Stack>
  );
};

TaskFrom.defaultProps = {
  resetAction: undefined,
};

export default TaskFrom;
