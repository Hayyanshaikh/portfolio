"use client";

import React, {
  Children,
  cloneElement,
  FC,
  FormEvent,
  ReactNode,
  useState,
} from "react";

interface FormProps {
  form?: string;
  className?: string;
  children: ReactNode;
  onSubmit: (data: Record<string, FormDataEntryValue>) => void;
}

const Form: FC<FormProps> = ({ form, className, onSubmit, children }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData.entries());

    let hasError = false;
    let firstErrorField: HTMLInputElement | HTMLTextAreaElement | null = null;

    const newErrors: Record<string, string> = {};

    const elements = formEl.querySelectorAll("[data-required]") as NodeListOf<
      HTMLInputElement | HTMLTextAreaElement
    >;

    for (const el of Array.from(elements)) {
      const name = el.name;
      const value = el.value;

      if (!value.trim()) {
        newErrors[name] = "This field is required";
        hasError = true;

        if (!firstErrorField) {
          firstErrorField = el;
        }
      } else {
        newErrors[name] = "";
      }
    }

    setErrors(newErrors);

    // ✔️ AUTO FOCUS FIRST ERROR FIELD
    if (firstErrorField) {
      firstErrorField.focus();
      return;
    }

    if (hasError) return;

    onSubmit(data);
  };

  return (
    <form id={form} className={className} onSubmit={handleSubmit}>
      {Children.map(children, (child: any) => cloneElement(child, { errors }))}
    </form>
  );
};

export default Form;
