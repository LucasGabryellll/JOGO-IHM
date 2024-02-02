import { Background, ButtonOptions, Modal, Question } from "../../components";
import { useLoginController } from "../../controller/useLoginController";
import { optionsInputLogin } from "../../model/loginModel";
import { LoginSchema } from "../../model/yupShemaValidade/loginSchema";

import styles from './styles.module.css';

export function Login() {
  const { loginController } = useLoginController();
  const { loginMethods, onHandleLogin } = loginController();

  return (
    <Background>
      <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => { }} />
      </ButtonOptions.Root>
      {/*
      <p className={styles.title}>
        ESCOLHA UM NOME
      </p>

      <div className={styles.container}>
       <Modal.Form<LoginSchema>
          onSendForm={onHandleLogin}
          useFormMethods={loginMethods}
          dateInputs={optionsInputLogin}
        />
      </div>
*/}
      <Question />
    </Background>
  )
}