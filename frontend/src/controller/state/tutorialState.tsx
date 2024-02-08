import { useState } from "react";

export function TutorialState() {
  const [itemFocus, setItemFocus] = useState<number>(0);
  
  return {
    itemFocus, setItemFocus
  }
}