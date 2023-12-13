import { InferType, object, string } from "yup";

const messageSchema = object({
  message: string().required("o campo mensagem é obrigatório")
});

export type MessageSchema = InferType<typeof messageSchema>;

export { messageSchema };