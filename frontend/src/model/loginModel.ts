export interface OptionsInput {
  id: number;
  description: string;
  placeholder?: string;
  value: string;
}

export const optionsInputLogin: OptionsInput[] = [
  { id: 1, 
    description: "USERNAME:*", 
    value: "username", 
    placeholder: "Escolha um nome para seu usuário..." 
  }
]; 