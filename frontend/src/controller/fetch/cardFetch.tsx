import { NotificationType, toasty } from "../../components";
import { socket } from "../../service/socketio";
import { CardState } from "../state/cardState";

const SECUNDS_ANIMATION = 2 * 1000;

export function CardFetch() {
  const { cardSelected, deck, setCardSelectd, setDeck } = CardState();

  const drawCard = (room: string) => {
    if (deck.length > 0) {
      const drawnCard = deck.pop();
      //console.log('Carta Sorteada:', drawnCard);
      setCardSelectd(drawnCard);

      setDeck([...deck]);

      setTimeout(() => {
        setCardSelectd(undefined);

        socket.emit('playerAnswer', {
          room: {
            id: room
          },
          card: drawnCard,
        });

      }, SECUNDS_ANIMATION)

    } else {
      toasty({ message: "Baralho vazio", type: NotificationType.ERROR });
    }
  };

  const passedCard = (room: string) => {
    socket.emit('playerAnswer', {
      room: {
        id: room
      },
      card: {
        id: 'card_move_f',
        type: 'moveBackward',
        value: 0,
      },
    });
  }

  return {
    drawCard,
    passedCard,
    
    cardSelected
  }
}