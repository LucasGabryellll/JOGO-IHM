import { Background, ContentGradient, ReturnToMenu } from "../../components";

import styles from './styles.module.css';

export function Credits() {

  return (
    <Background>
     <ReturnToMenu headerTitle="CRÉDITOS" />

      <ContentGradient>
        <div className={styles['content-information']}>
          <div className={styles['scrolling-content']}>
            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Desenvolvido por:</p>
              <p className={styles.description}>Lucas Gabryel Monteiro de Lima</p>
            </div>

            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Professor Orientador:</p>
              <p className={styles.description}>Richarlison D'Emery</p>
            </div>

            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Cadeira:</p>
              <p className={styles.description}>Interface Homem-Máquina</p>
            </div>

            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Contribuições Individuais:</p>

              <p className={styles.description}>Lucas Gabryel: Desenvolvimento da interface do usuário, programação principal, e design de níveis.</p>

              <p className={styles.description}>Lucas Gabryel: Implementação de recursos especiais e mecânicas de jogo.</p>

              <p className={styles.description}>Lucas Gabryel: Trilha sonora e efeitos sonoros.</p>
            </div>

            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Recursos Utilizados:</p>
              <p className={styles.description}>React;</p>
              <p className={styles.description}>Node JS;</p>
              <p className={styles.description}>TypeScript;</p>
              <p className={styles.description}>Socket.</p>
            </div>

            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Universidade:</p>
              <p className={styles.description}>Universidade Federal Rural do Pernambuco.</p>
            </div>

            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Copyright e Licenças:</p>
              <p className={styles.description}>Projeto acadêmico podendo ser utilizado de forma livre.</p>
            </div>

            <div className={styles['content-info-credit']}>
              <p className={styles.title}>Sobre o Jogo:</p>
              O jogo possibilita que dois jogadores disputem entre si, o tema central é programação.
              
              <br/>
              <br/>

              No qual são lançados desafios para o seu oponente, que o adversário irá construir, ou você responde a questões formuladas pelo sistema.
              
              <br/>
              <br/>

              Agradecemos a todos que contribuíram e apoiaram este projeto. Esperamos que aproveitem o jogo tanto quanto nós aproveitamos o processo de desenvolvê-lo.
              
              <br/>
              <br/>

              <strong>CraftCodeDuel</strong> © 2023 - Todos os direitos reservados.
            </div>

          </div>
        </div>

      </ContentGradient>
    </Background>
  )
}