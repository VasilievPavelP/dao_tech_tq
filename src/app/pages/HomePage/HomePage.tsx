import { Box, IconButton } from '@mui/material';
import { NewTaskModal } from 'app/components';
import { useDocTitle } from 'app/hooks';
import React, { useState } from 'react';
import { Plus } from 'tabler-icons-react';

const HomePage: React.FC = () => {
  const [createModal, setCreateModal] = useState(false);
  const handleOpenCreateModal = (): void => {
    setCreateModal(true);
  };
  const handleCloseCreateModal = ():void => {
    setCreateModal(false);
  };
  useDocTitle('Home');
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <h1 className="fw-bold font-monospace">Taskbar</h1>
        <IconButton
          sx={{ height: 'fit-content' }}
          onClick={handleOpenCreateModal}
        >
          <Plus />
        </IconButton>
      </Box>
      <div />
      <NewTaskModal open={createModal} onClose={handleCloseCreateModal} />
    </>
  );
};

export default HomePage;
