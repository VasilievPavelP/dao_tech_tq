import React from 'react';
import {
  Modal as ModalMUI, Box, Typography, IconButton,
} from '@mui/material';
import { X } from 'tabler-icons-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string
  children: React.ReactNode
}

const Modal:React.FC<ModalProps> = ({
  open, children, onClose, title,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    minWidth: 400,
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    padding: '10px 15px 20px',
  };
  return (
    <ModalMUI
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" fontWeight={700}>{title}</Typography>
          <IconButton size="small" onClick={onClose}>
            <X size={20} />
          </IconButton>
        </Box>
        <Box sx={{ flex: 1, mt: 2 }}>
          {children}
        </Box>
      </Box>
    </ModalMUI>
  );
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
