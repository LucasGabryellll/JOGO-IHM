import { Background, ButtonOptions, ReturnToMenu } from "../../components";
import { ControllerSoud } from "../../components/ControllerSoud";
import { TutorialState } from "../../controller/state/tutorialState";
import { FocusItem } from "./Components/FocusItem/FocusItem";
import { help_items } from "./items";

import styles from "./styles.module.css";

export function Tutorial() {

  const { itemFocus, setItemFocus } = TutorialState();

  return (
    <Background>
      <ButtonOptions.Root>
        <ControllerSoud />
      </ButtonOptions.Root>

      <ReturnToMenu headerTitle="TUTORIAL" />

      <div className={styles.container}>
        <FocusItem
          focus={itemFocus}
        />

        <div className={styles['content-options']}>
          {help_items.map((value, index) => (
            <button
              className={styles.btn}
              onClick={() => setItemFocus(index)}
            >
              {itemFocus === index ? <div className={styles['btn-inner']} /> : <></>}
            </button>
          ))}
        </div>
      </div>
    </Background>
  )
}