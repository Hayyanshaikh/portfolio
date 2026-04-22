"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiX, HiChevronDown } from "react-icons/hi";

interface MultiSelectFieldProps {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  defaultValue?: string[];
  isRequired?: boolean;
}

export default function MultiSelectField({
  name,
  label,
  options,
  defaultValue = [],
  isRequired = false,
}: MultiSelectFieldProps) {
  const [selected, setSelected] = useState<string[]>(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    setSelected(newSelected);
  };

  const removeOption = (value: string) => {
    setSelected(selected.filter((v) => v !== value));
  };

  return (
    <div className="space-y-1.5 relative" ref={containerRef}>
      <label className="text-[9px] uppercase tracking-widest text-muted font-bold ml-1">
        {label}
      </label>

      {/* Hidden input for form submission */}
      <input
        type="hidden"
        name={name}
        value={JSON.stringify(selected)}
        data-required={isRequired ? true : undefined}
      />

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 border border-white/5 px-4 py-2 min-h-[46px] text-xs outline-none transition-all text-white flex flex-wrap gap-2 items-center cursor-pointer hover:border-white/20"
      >
        {selected.length > 0 ? (
          selected.map((val) => (
            <span
              key={val}
              className="px-2 py-1 bg-white/10 rounded flex items-center gap-1 text-[10px] uppercase font-bold"
            >
              {val}
              <HiX
                className="hover:text-red-500 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(val);
                }}
              />
            </span>
          ))
        ) : (
          <span className="text-white/20 tracking-wider">Select technologies...</span>
        )}
        <HiChevronDown className={`ml-auto transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full left-0 w-full mt-1 bg-surface border border-white/10 shadow-2xl max-h-60 overflow-y-auto custom-scrollbar animate-reveal">
          {options.map((option) => {
            const isSelected = selected.includes(option.value);
            return (
              <div
                key={option.value}
                onClick={() => toggleOption(option.value)}
                className={`px-4 py-2 text-xs cursor-pointer transition-colors ${
                  isSelected ? "bg-white/10 text-white" : "text-muted hover:bg-white/5 hover:text-white"
                }`}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
