import { ReactNode } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

import { Button } from '../Button';

import styles from './styles.module.css';

interface ModalProps {
  isOpen: boolean;
  onCloseModal: (value: boolean) => void;
  children?: ReactNode;
}

export function Modal({ isOpen, onCloseModal, children }: ModalProps) {

  if (!isOpen) return null;

  return (
    <div className={styles['container-modal']}>
      <div className={styles['content-modal']}>

        {children}

        <div className={styles.btn}>
          <Button.Root description='ENTRAR' onPress={() => onCloseModal(false)}>
            <Button.Icon Icon={FiLogIn} />
          </Button.Root>
        </div>

        <div className={styles.btn}>
          <Button.Root description='FECHAR' onPress={() => onCloseModal(false)}>
            <Button.Icon Icon={IoCloseSharp} />
          </Button.Root>
        </div>
      </div>
    </div>
  )
}