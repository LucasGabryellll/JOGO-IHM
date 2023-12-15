import { Background, Button, ButtonOptions, ContentGradient } from "../../components";

import { OptionsButtonHome } from "../../model";

export function Home() {
  return (
    <Background>
      <ButtonOptions.Root>
        <ButtonOptions.Icon type="sound" action={() => { }} />
      </ButtonOptions.Root>

      <ContentGradient description="JOGO IHM">
        {OptionsButtonHome().map((value) => (
          <div
            key={`options-buttons-home-${value.id}`}
            style={{ height: 100, width: '100%' }}
          >
            <Button.Root
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