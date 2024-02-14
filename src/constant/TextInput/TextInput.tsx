import React, { useState, FocusEvent, MouseEvent } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import CloseEye from "../../assets/icons/CloseEye";
import OpenEye from "../../assets/icons/openEye";

type TextInputProps<TFieldValues extends FieldValues> = {
  error?: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  type?: "text" | "password";
  isDisabled?: boolean;
  asterisk?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const TextInput = <TFieldValues extends FieldValues>({
  error,
  label,
  placeholder,
  register,
  name,
  type = "text",
  isDisabled,
  asterisk,
  ...restProps
}: TextInputProps<TFieldValues>): JSX.Element => {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    setFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
    setFocused(false);
    setFilled(e.target.value !== "");
  };

  const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && !showPassword ? "password" : "text";

  return (
    <div className="relative rounded-md bg-input text-input-text w-full">
      <label
        htmlFor={name}
        className={classNames(
          " text-[#5D586C] z-50 rounded-md text-sm transition-all duration-300",
          {
            "-mt-2 text-xs text-black p-1": focused || filled,
          }
        )}
      >
        {asterisk ? (
          <>
            {label}
            <span className="text-red-500"> *</span>
          </>
        ) : (
          label
        )}{" "}
      </label>
      <input
        {...register(name)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={inputType}
        placeholder={placeholder}
        disabled={isDisabled}
        className={classNames(
          "block border text-input-text w-full px-4 bg-transparent py-2 z-50 relative rounded-md outline-none transition-all duration-300",
          {
            "border border-input-border": focused,
          }
        )}
        {...restProps}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-50"
        >
          {showPassword ? (
            <CloseEye
              height={24}
              width={24}
              color="#000000"
              className="h-6 w-6 text-black"
            />
          ) : (
            <OpenEye
              height={24}
              width={24}
              color="#000000"
              className="h-6 w-6 text-black"
            />
          )}
        </button>
      )}
      {error !== "" ? <p style={{ color: "red" }}>{error}</p> : null}
    </div>
  );
};

export default TextInput;
