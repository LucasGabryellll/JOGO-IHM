import { Background, Button, ContentGradient } from "../../components";
import { OptionsButtonLobby } from "../../model";

export function Lobby() {
  return (
    <Background>
      <ContentGradient description="ENTRAR EM UMA PARTIDA">
        {OptionsButtonLobby().map((value) => (
          <Button.Root
            key={`options-buttons-lobby-${value.id}`}
            description={value.description}
            onPress={value.onPress}
          >
            <Button.Icon Icon={value.Icon} />
          </Button.Root>
        ))}
      </ContentGradient>
    </Background>
  )
}