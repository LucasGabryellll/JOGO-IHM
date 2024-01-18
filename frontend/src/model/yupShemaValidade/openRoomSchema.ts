import { InferType, object, string } from "yup";

const roomSchema = object({
  codigo: string().required("O campo código é obrigatório."),
});

export type RoomSchema = InferType<typeof roomSchema>;

export { roomSchema };