import { NotificationType, toasty } from "..";

interface GetBonusProps {
  value: number
}

export function GetBonus({ value }: GetBonusProps) {
  return toasty({ message: `Parabéns, você pegou um bonus, avance: ${value} casas`, type: NotificationType.SUCCESS });
}