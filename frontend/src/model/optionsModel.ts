export interface OptionsInput {
  id: number;
  description: string;
  placeholder?: string;
  value: string;
}

export const optionsInputOpenRoom: OptionsInput[] = [
  { id: 1, 
    description: "CÓDIGO:*", 
    value: "codigo", 
    placeholder: "Digite o código da sala..." 
  },
  { id: 2, 
    description: "USUÁRIO:*", 
    value: "usuario", 
    placeholder: "Escolha um nome para o usuário..." 
  },
]; 