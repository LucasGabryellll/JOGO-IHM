type Question = {
  id: string,
  question: string,
  original_word: string,
  difficulty: number,
  points: number
}

export type WordProps = {
  id: string;
  name: string
}

const questions: Question[] = [
  { id: 'challenge_1', original_word: 'public int somar(int a, int b) { return a + b; }', question: 'Monte a ordem correta para uma função que realiza a soma de dois números inteiros.', difficulty: 1, points: 100 },
  { id: 'challenge_2', original_word: 'private void calcular(int a, int b) { System.out.println(a * b); }', question: 'Organize as palavras na ordem correta para uma função privada que imprime o produto de dois números inteiros.', difficulty: 2, points: 200 },
  { id: 'challenge_3', original_word: 'public static double dividir(double a, double b) { return a / b; }', question: 'Crie a sequência adequada para uma função estática que realiza a divisão de dois números decimais.', difficulty: 3, points: 300 },
  { id: 'challenge_4', original_word: 'private static void imprimirResultado(int resultado) { System.out.println(resultado); }', question: 'Ordene as palavras para formar uma função estática que imprime um resultado inteiro.', difficulty: 1, points: 100 },
  { id: 'challenge_5', original_word: 'public final String concatenarStrings(String s1, String s2) { return s1 + s2; }', question: 'Disponha as palavras na ordem correta para uma função pública e final que concatena duas strings.', difficulty: 2, points: 200 },
  { id: 'challenge_6', original_word: 'private static final void exibirMensagem(String mensagem) { System.out.println(mensagem); }', question: 'Organize as palavras para criar uma função estática e final que exibe uma mensagem.', difficulty: 3, points: 300 },
  { id: 'challenge_7', original_word: 'public void realizarOperacao(int a, int b) { }', question: 'Monte a sequência adequada para uma função pública que realiza uma operação com dois números inteiros.', difficulty: 1, points: 100 },
  { id: 'challenge_8', original_word: 'private static int calcularProduto(int a, int b) { return a * b; }', question: 'Coloque as palavras na ordem correta para uma função estática que calcula o produto de dois números inteiros.', difficulty: 2, points: 200 },
  { id: 'challenge_9', original_word: 'public static void main(String[] args) { }', question: 'Ordene as palavras para criar a estrutura básica de um método principal em Java.', difficulty: 3, points: 300 },
  { id: 'challenge_10', original_word: 'private String gerarMensagem(String prefixo, String sufixo) { return prefixo + " " + sufixo; }', question: 'Monte a sequência correta para uma função privada que gera uma mensagem concatenando um prefixo e um sufixo.', difficulty: 1, points: 100 },
  { id: 'challenge_11', original_word: 'public static final int calcularQuadrado(int x) { return x * x; }', question: 'Organize as palavras para uma função pública, estática e final que calcula o quadrado de um número inteiro.', difficulty: 2, points: 200 },
  { id: 'challenge_12', original_word: 'private static void exibirResultado(double resultado) { System.out.println(resultado); }', question: 'Coloque as palavras na ordem correta para uma função estática que exibe um resultado decimal.', difficulty: 3, points: 300 },
  { id: 'challenge_13', original_word: 'public void processarDados(int[] dados) { }', question: 'Monte a ordem adequada para uma função pública que processa um array de dados inteiros.', difficulty: 1, points: 100 },
  { id: 'challenge_14', original_word: 'private static double calcularMedia(double[] valores) { }', question: 'Organize as palavras para uma função estática que calcula a média de um array de valores decimais.', difficulty: 2, points: 200 },
  { id: 'challenge_15', original_word: 'public String concatenarPalavras(String... palavras) { }', question: 'Coloque as palavras na ordem correta para uma função pública que concatena um número variável de palavras.', difficulty: 3, points: 300 },
  { id: 'challenge_16', original_word: 'private static int calcularSoma(int[] numeros) { }', question: 'Monte a sequência correta para uma função estática que calcula a soma de um array de números inteiros.', difficulty: 1, points: 100 },
  { id: 'challenge_17', original_word: 'public final void exibirInformacao(String info) { System.out.println(info); }', question: 'Organize as palavras para uma função pública e final que exibe uma informação.', difficulty: 2, points: 200 },
  { id: 'challenge_18', original_word: 'public static String formatarTexto(String texto, String formato) { }', question: 'Disponha as palavras na ordem correta para uma função estática que formata um texto de acordo com um formato fornecido.', difficulty: 3, points: 300 },
  { id: 'challenge_19', original_word: 'private static final double calcularRaizQuadrada(double x) { return Math.sqrt(x); }', question: 'Monte a ordem correta para uma função estática, final, que calcula a raiz quadrada de um número decimal.', difficulty: 1, points: 100 },
  { id: 'challenge_20', original_word: 'public void realizarAcao() { }', question: 'Coloque as palavras na ordem correta para uma função pública que realiza uma ação.', difficulty: 2, points: 200 },
  { id: 'challenge_21', original_word: 'public static int calcularFatorial(int n) { if (n == 0) return 1; else return n * calcularFatorial(n - 1); }', question: 'Organize as palavras para uma função pública e estática que calcula o fatorial de um número inteiro.', difficulty: 2, points: 200 },
  { id: 'challenge_22', original_word: 'private double calcularPotencia(double base, double expoente) { return Math.pow(base, expoente); }', question: 'Coloque as palavras na ordem correta para uma função privada que calcula a potência de um número.', difficulty: 2, points: 200 },
  { id: 'challenge_23', original_word: 'public static String inverterString(String str) { return new StringBuilder(str).reverse().toString(); }', question: 'Disponha as palavras na ordem correta para uma função estática que inverte uma string.', difficulty: 1, points: 100 },
  { id: 'challenge_24', original_word: 'private static void ordenarArray(int[] arr) { Arrays.sort(arr); }', question: 'Ordene as palavras para formar uma função estática que ordena um array de inteiros.', difficulty: 2, points: 200 },
  { id: 'challenge_25', original_word: 'public static boolean verificarPrimo(int num) { if (num <= 1) return false; for (int i = 2; i <= Math.sqrt(num); i++) { if (num % i == 0) return false; } return true; }', question: 'Organize as palavras para uma função estática que verifica se um número é primo.', difficulty: 3, points: 300 },
  { id: 'challenge_26', original_word: 'private String[] dividirString(String str, String regex) { return str.split(regex); }', question: 'Coloque as palavras na ordem correta para uma função privada que divide uma string com base em uma expressão regular.', difficulty: 1, points: 100 },
  { id: 'challenge_30', original_word: 'somarArray(int[] arr) {int sum = 0; for (int num : arr) {sum += num;} return sum;}', question: 'Coloque as palavras na ordem correta para uma função estática que calcula a soma dos elementos de um array de inteiros.', difficulty: 2, points: 200 }
];

export {
  questions
}