import { useState } from "react";

import { CardProps } from "../../model/card";
import { createDeck } from "../deck";

export function CardState() {
  const [deck, setDeck] = useState(createDeck());
  const [cardSelected, setCardSelectd] = useState<CardProps>();

  return {
    deck,
    cardSelected,

    setDeck,
    setCardSelectd
  }
}