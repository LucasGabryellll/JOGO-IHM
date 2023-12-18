import { Background, ButtonOptions, ReturnToMenu } from "../../components";

export function Tutorial() {
  return (
    <Background>
      <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => { }} />
      </ButtonOptions.Root>

      <ReturnToMenu headerTitle="TUTORIAL" />
    </Background>
  )
}