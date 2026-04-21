import React from "react";

interface DateFieldProps {
  name: string;
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
  errors?: Record<string, string>;
}

export default function DateField({
  name,
  label,
  isDisabled = false,
  isRequired = false,
  defaultValue,
  errors,
}: DateFieldProps) {
  const inputBaseClass =
    "w-full bg-white/5 border px-4 py-3 text-xs outline-none transition-all text-white appearance-none";

  const error = errors?.[name];

  return (
    <div className={`space-y-1.5 flex-1 transition-opacity ${isDisabled ? "opacity-30 pointer-events-none" : "opacity-100"}`}>
      <label className="text-[9px] uppercase tracking-widest text-muted font-bold ml-1">
        {label}
      </label>

      <div className="relative group">
        <input
          name={name}
          type="date"
          disabled={isDisabled}
          defaultValue={defaultValue}
          data-required={isRequired ? true : undefined}
          className={`${inputBaseClass} ${
            error ? "border-red-500 focus:border-red-500" : "border-white/5 focus:border-white/20"
          } [color-scheme:dark] ${isDisabled ? "cursor-not-allowed" : ""}`}
        />
      </div>

      {error && <p className="text-red-500 text-[10px] ml-1">{error}</p>}
    </div>
  );
}
