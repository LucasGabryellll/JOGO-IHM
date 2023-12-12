import { Background, ButtonOptions, HeaderUserPoints, Chat } from "../../components";
import { useNavigation } from "../../hooks/useNavigation";

export function Gamming() {
  const { navigation } = useNavigation();

  return (
    <Background>
       <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => console.log("Sound")}/>
        <ButtonOptions.Icon type="help" action={() => console.log("help")}/>
        <ButtonOptions.Icon type="close" action={() => navigation("/")}/>
      </ButtonOptions.Root>

      <HeaderUserPoints/>

      <Chat/>
    </Background>
  )
}