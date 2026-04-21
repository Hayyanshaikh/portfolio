"use client";

import React from "react";

type FormProps = {
  form?: string;
  className?: string;
  children: React.ReactNode;
  onSubmit: (data: Record<string, FormDataEntryValue>) => void;
};

const Form: React.FC<FormProps> = ({ form, className, onSubmit, children }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    onSubmit(data);
  };

  return (
    <form id={form} className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
