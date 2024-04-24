import { ReactElement, useId } from "react";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "textarea" | "password";
}

function Input({
  name,
  label,
  placeholder,
  type = "text",
}: Props): ReactElement {
  const id: string = useId();
  const input: ReactElement =
    type === "textarea" ? (
      <textarea id={id} name={name} placeholder={placeholder} required />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required
      />
    );

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {input}
    </div>
  );
}

export default Input;
