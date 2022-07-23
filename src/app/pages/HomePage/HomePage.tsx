import { Button, Modal, SearchField } from 'app/components';
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
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="fw-bold font-monospace">Taskbar</h1>
        <div>
          <Button
            size="sm"
            onClick={handleOpenCreateModal}
          >
            <Plus />

          </Button>
        </div>
      </div>
      <div className="mt-2">
        <SearchField />
      </div>
      {createModal && (
        <Modal
          title="Create new task"
          onAction={() => undefined}
          onClose={handleCloseCreateModal}
        >
          123
        </Modal>
      )}
    </>
  );
};

export default HomePage;
