import { useOnClickOutside } from 'app/hooks';
import { usePressKey } from 'app/hooks/usePressKey';
import React, { useRef } from 'react';
import { X } from 'tabler-icons-react';
import { Button } from '../Button';

import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
  onAction: () => void;
}

const Modal: React.FC<ModalProps> = ({
  onAction, onClose, children, title,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dialogRef, onClose);
  usePressKey('Escape', onClose);
  return (
    <div
      className={styles.Modal}
      tabIndex={-1}
    >
      <div ref={dialogRef} className={styles.Modal_dialog}>
        <div className={styles.Modal_header}>
          <h4 className={styles.Modal_title}>{title}</h4>
          <Button
            className={styles.Modal_exit}
            size="sm"
            color="light"
            onClick={onClose}
          >
            <X size={18} />
          </Button>
        </div>
        <div className={styles.Modal_content}>
          {children}
        </div>
        <div className={styles.Actions}>
          <Button onClick={onAction}>Submit</Button>
          <Button color="secondary" onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
