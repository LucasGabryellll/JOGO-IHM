import { Button } from "../../Button";
import { ContainerInput } from "../../ContainerInput";

import { PiSignInBold } from "react-icons/pi";
import { UseFormReturn } from "react-hook-form";

import { OptionsInput } from "../../../model/optionsModel";

import styles from './styles.module.css';

interface FormProps<T> {
  dateInputs: OptionsInput[];
  onSendForm: (date: T) => void;
  useFormMethods: UseFormReturn<T | any | undefined>;
}

export function Form<T>({ onSendForm, useFormMethods, dateInputs }: FormProps<T>) {
  const { handleSubmit, register, formState: { errors } } = useFormMethods;

  return (
    <form onSubmit={handleSubmit(onSendForm)}>
      <div className={styles['container-form']}>
        {dateInputs.map((value) => (
          <>
            <ContainerInput
              key={`input-form-${value.value}`}
              description={value.description}
            >
              <input
                className={styles['input-format']}
                placeholder={value.placeholder}
                {...register(value.value.toLowerCase())}
              />
            </ContainerInput>

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