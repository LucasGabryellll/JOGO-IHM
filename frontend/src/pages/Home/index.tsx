import { Background, Button, ContentGradient } from "../../components";
import { useConnectSocket } from "../../hooks/useConnectSocket"
import { OptionsButtonHome } from "../../model";

export function Home() {
  useConnectSocket();

  return (
    <Background>
      <ContentGradient description="JOGO IHM">
        {OptionsButtonHome().map((value) => (
          <div style={{ height: 100, width: '100%' }}>
            <Button.Root
              key={`options-buttons-home-${value.id}`}
              description={value.description}
              onPress={value.onPress}
            >
              <Button.Icon Icon={value.Icon} />
            </Button.Root>
          </div>
        ))}
      </ContentGradient>
    </Background>
  )
}