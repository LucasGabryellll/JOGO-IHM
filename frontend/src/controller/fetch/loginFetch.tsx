import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { useNavigation } from "../../hooks/useNavigation";
import { useSchemaValidade } from "../../hooks/useSchemaValidade";
import { LoginSchema, loginSchema } from "../../model/yupShemaValidade/loginSchema";
import { NotificationType, toasty } from "../../components";

export function LoginFetch() {
  const loginMethods = useSchemaValidade<LoginSchema>({ schemaYup: loginSchema });
  const { onSelectUsername } = useContext(GameContext);

  const { navigation } = useNavigation();

  function onHandleLogin(data: LoginSchema) {
    onSelectUsername(data.username);

    loginMethods.resetField("username");
    navigation('/home');
    
    toasty({ message: "Login realizado com sucesso", type: NotificationType.SUCCESS });
  }

  return {
    loginMethods,
    onHandleLogin
  }
}