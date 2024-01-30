import { useCardController } from '../../../controller';

import { BackCard } from '../BackCard';
import { FrontCard } from '../FrontCard';

import styles from './styles.module.css';

interface CardSelectProps {
  room: string,
}

export function Card({ room }: CardSelectProps) {
  const { cardController } = useCardController();
  
  const fetch = cardController();
  
  const { cardSelected, drawCard } = fetch;

  return (
    <div className={styles.container} onClick={() => drawCard(room)}>
      <div
        className={styles['card-inner']}
        style={{ transform: `${cardSelected ? 'rotateY(180deg)' : ''}` }}
      >
        <FrontCard typeCard={cardSelected} />

        <BackCard />
      </div>
    </div>
  )
}