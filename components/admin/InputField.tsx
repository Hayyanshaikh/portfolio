import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  isTextArea?: boolean;
  rows?: number;
}

export default function InputField({
  label,
  type = "text",
  defaultValue,
  placeholder,
  isTextArea = false,
  rows = 4
}: InputFieldProps) {
  const inputBaseClass = "w-full bg-white/5 border border-white/5 px-4 py-3 text-xs focus:outline-none focus:border-white/20 transition-all rounded-none text-white placeholder:text-muted/50";

  return (
    <div className="space-y-1.5">
      <label className="text-[9px] uppercase tracking-widest text-muted font-bold ml-1">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows={rows}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`${inputBaseClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={inputBaseClass}
        />
      )}
    </div>
  );
}
