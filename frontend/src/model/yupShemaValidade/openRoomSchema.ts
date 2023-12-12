import { InferType, object, string } from "yup";

const roomSchema = object({
  codigo: string().required("O campo código é obrigatório."),
  usuario: string().required("Escolha um nome para seu usuário.")
});

export type RoomSchema = InferType<typeof roomSchema>;

export { roomSchema };