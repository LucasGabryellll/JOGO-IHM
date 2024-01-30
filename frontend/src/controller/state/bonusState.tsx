import { useState } from "react";

type Bonus = {
  player: string,
  valueBonus: number
}

export function BonusState() {
  const [bonus, setBonus] = useState<Bonus>();

  return {
    setBonus,
    bonus
  }
}