import React from "react";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  rows?: number;
  isRequired?: boolean;
  defaultValue?: string;
  placeholder?: string;
  isTextArea?: boolean;
  errors?: Record<string, string>;
}

export default function InputField({
  name,
  label,
  rows = 4,
  placeholder,
  defaultValue,
  type = "text",
  isTextArea = false,
  isRequired = false,
  errors,
}: InputFieldProps) {
  const inputBaseClass =
    "w-full bg-white/5 border px-4 py-3 text-xs outline-none transition-all text-white";

  const error = errors?.[name];

  return (
    <div className="space-y-1.5">
      <label className="text-[9px] uppercase tracking-widest text-muted font-bold ml-1">
        {label}
      </label>

      {isTextArea ? (
        <textarea
          name={name}
          rows={rows}
          defaultValue={defaultValue}
          placeholder={placeholder}
          data-required={isRequired ? true : undefined}
          className={`${inputBaseClass} ${
            error ? "border-red-500 focus:border-red-500" : "border-white/5"
          }`}
        />
      ) : (
        <input
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          data-required={isRequired ? true : undefined}
          className={`${inputBaseClass} ${
            error ? "border-red-500 focus:border-red-500" : "border-white/5"
          }`}
        />
      )}

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
