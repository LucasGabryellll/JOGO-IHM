import { Button } from "../../Button";
import { Input } from "../../Input";

import { PiSignInBold } from "react-icons/pi";
import { UseFormReturn } from "react-hook-form";

import { OptionsInput } from "../../../model/optionsModel";

import styles from './styles.module.css';

interface FormProps<T> {
  dateInputs: OptionsInput[];
  onSendForm: (date: any) => void;
  useFormMethods: UseFormReturn<T | any | undefined>;
}

export function Form<T>({ onSendForm, useFormMethods, dateInputs }: FormProps<T>) {
  const { handleSubmit, register, formState: { errors } } = useFormMethods;

  return (
    <form onSubmit={handleSubmit(onSendForm)}>
      <div className={styles['container-form']}>
        {dateInputs.map((value) => (
          <>
            <Input
              key={`input-form-${value.value}`}
              description={value.description}
              placeholder={value.placeholder}
              {...register(value.value)}
            />

            {//@ts-ignore
              <span className={styles.erros}>{errors?.[value?.value]?.message}</span>
            }
          </>
        ))}
      </div>

      <Button.Root description="ENTRAR" type="submit">
        <Button.Icon Icon={PiSignInBold} />
      </Button.Root>

    </form>
  );
}