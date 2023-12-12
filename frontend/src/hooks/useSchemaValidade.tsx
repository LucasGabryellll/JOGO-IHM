import { useForm, FieldValues } from "react-hook-form";

import { ObjectSchema } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  schemaYup: ObjectSchema<{}>;
}

function useSchemaValidade<T extends FieldValues>({ schemaYup }: Props) {

  const methods = useForm<T>({ resolver: yupResolver(schemaYup) });

  return methods;
}

export {
  useSchemaValidade
}