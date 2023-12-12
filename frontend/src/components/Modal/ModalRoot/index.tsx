import { ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";

import { Button } from "../../Button";

import styles from './styles.module.css';

interface ModalRootProps {
  isOpen: boolean;
  onCloseModal: (value: boolean) => void;
  children?: ReactNode;
}

export function ModalRoot({ isOpen, onCloseModal, children }: ModalRootProps) {
  if (!isOpen) return null;

  return (
    <div className={styles['container-modal']}>
      <div className={styles['content-modal']}>

        <div>
          {children}
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