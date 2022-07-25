import { Modal, TaskFrom } from 'app/components';
import React from 'react';

interface NewTaskModalProps {
  open: boolean;
  onClose: () => void;
}

const NewTaskModal:React.FC<NewTaskModalProps> = ({ open, onClose }) => (
  <Modal
    title="New task"
    open={open}
    onClose={onClose}
  >
    <TaskFrom resetAction={onClose} />
  </Modal>
);

export default NewTaskModal;
