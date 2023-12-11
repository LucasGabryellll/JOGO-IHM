import { useState } from "react"

export function ModalState() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return { isOpenModal, setIsOpenModal };
}