import { IoReturnDownBackSharp } from "react-icons/io5";
import { Button } from '../Button';

import { useNavigation } from "../../hooks/useNavigation";
import styles from './styles.module.css';

interface ReturnToMenuProps {
  headerTitle?: string
}

export function ReturnToMenu({ headerTitle }: ReturnToMenuProps) {
  const { navigation } = useNavigation();

  return (
    <div className={styles['content-button']}>
      <div className={styles.button}>
        <Button.Root description="VOLTAR" onPress={() => navigation("/")} >
          <Button.Icon Icon={IoReturnDownBackSharp} />
        </Button.Root>
      </div>

      <p>{headerTitle}</p>
    </div>
  )
}