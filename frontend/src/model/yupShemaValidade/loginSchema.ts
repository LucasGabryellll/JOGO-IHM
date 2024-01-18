import { InferType, object, string } from "yup";

const loginSchema = object({
  username: string().required("O nome é obrigatório."),
});

export type LoginSchema = InferType<typeof loginSchema>;

export { loginSchema };