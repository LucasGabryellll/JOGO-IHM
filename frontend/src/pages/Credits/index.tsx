import { Background, Button, ContentGradient } from "../../components";
import { useNavigation } from "../../hooks/useNavigation";
import { IoReturnDownBackSharp } from "react-icons/io5";

import styles from './styles.module.css';

export function Credits() {
  const { navigation } = useNavigation();

  return (
    <Background>
      <div className={styles['content-button']}>
        <div className={styles.button}>
          <Button.Root description="VOLTAR" onPress={() => navigation("/")} >
            <Button.Icon Icon={IoReturnDownBackSharp} /> 
          </Button.Root>
        </div>

        <p>CRÉDITOS</p>
      </div>

      <ContentGradient>
        <div className={styles['content-information']}>
          <div className={styles['scrolling-content']}>
            <p>Desenvolvido por:</p>
            <strong>Lucas Gabryel Monteiro de Lima</strong>

            <p>Professor Orientador:</p>
            <strong>Richarlison D'Emery</strong>

            <p>Cadeira: Interface Homem-Máquina</p>

            <p>Contribuições Individuais:</p>
            <p>Lucas Gabryel: Desenvolvimento da interface do usuário, programação principal, e design de níveis.</p>
            <p>Lucas Gabryel: Implementação de recursos especiais e mecânicas de jogo.</p>
            <p>Lucas Gabryel: Gráficos e design de personagens.</p>
            <p>Lucas Gabryel: Trilha sonora e efeitos sonoros.</p>

            <p>Recursos Utilizados:</p>
            <p>-React;</p>
            <p>-Node JS;</p>
            <p>-TypeScript;</p>
            <p>-Socket.</p>

            <p>Universidade:</p>
            <p>- Universidade Federal Rural do Pernambuco.</p>

            <p>Copyright e Licenças:</p>
            <p>Projeto acadêmico podendo ser utilizado de forma livre.</p>

            <p>Sobre o Jogo:</p>
            <p>O jogo possibilita que dois jogadores disputem entre si, o tema central é programação.</p>
            <p>No qual são lançados desafios para o seu oponente, que o adversário irá construir, ou você responde a questões formuladas pelo sistema.</p>

            <p>Agradecemos a todos que contribuíram e apoiaram este projeto. Esperamos que aproveitem o jogo tanto quanto nós aproveitamos o processo de desenvolvê-lo.</p>

            <p>Nome do Seu Jogo © 2023 - Todos os direitos reservados.</p>

          </div>
        </div>

      </ContentGradient>
    </Background>
  )
}