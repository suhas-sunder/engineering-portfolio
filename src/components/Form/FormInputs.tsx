import {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import Styles from "./styles/FormInputs.module.css";

interface FormInputsProps {
  id: string;
  label: string;
  errorMessage?: string;
  touched?: boolean;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default function FormInputs(props: FormInputsProps) {
  const {
    label,
    errorMessage,
    touched = false,
    value = "",
    onChange,
    onBlur,
    ...formProps
  } = props;
  const isInput = props.name !== "message";
  const errorId = `${props.id}-error`;
  const normalizedValue = value.trim();
  const isInvalid =
    touched &&
    (normalizedValue.length === 0 ||
      (props.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedValue)));
  const fieldClassName = `${
    isInput ? Styles.input : Styles.message
  } ${isInvalid ? Styles["invalid-input"] : ""} w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15`;

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    ...formProps,
    ...(onChange
      ? {
          value,
          onChange: onChange as ChangeEventHandler<HTMLInputElement>,
        }
      : { defaultValue: value }),
    onBlur: onBlur as FocusEventHandler<HTMLInputElement>,
    "aria-describedby": isInvalid && errorMessage ? errorId : undefined,
    "aria-invalid": isInvalid || undefined,
  };

  const textAreaProps: TextareaHTMLAttributes<HTMLTextAreaElement> = {
    ...formProps,
    ...(onChange
      ? {
          value,
          onChange: onChange as ChangeEventHandler<HTMLTextAreaElement>,
        }
      : { defaultValue: value }),
    onBlur: onBlur as FocusEventHandler<HTMLTextAreaElement>,
    "aria-describedby": isInvalid && errorMessage ? errorId : undefined,
    "aria-invalid": isInvalid || undefined,
  };

  return (
    <div className="grid min-w-0 gap-2">
      <label htmlFor={props.id} className="text-sm font-bold text-slate-800">
        {label}
        {props.required ? (
          <span className="ml-1 text-teal-700" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      {isInput ? (
        <input className={fieldClassName} {...inputProps} />
      ) : (
        <textarea
          className={`${fieldClassName} min-h-36 resize-y`}
          rows={6}
          {...textAreaProps}
        />
      )}

      {isInvalid && errorMessage ? (
        <span
          id={errorId}
          data-testid="error"
          className="text-sm font-semibold text-red-700"
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}
