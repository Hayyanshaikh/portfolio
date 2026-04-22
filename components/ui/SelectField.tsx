"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiX, HiChevronDown, HiCheck } from "react-icons/hi";

interface SelectFieldProps {
  name: string;
  label: string;
  options: { label: string; value: string }[];
  defaultValue?: string | string[];
  isRequired?: boolean;
  isMulti?: boolean;
  placeholder?: string;
}

export default function SelectField({
  name,
  label,
  options,
  defaultValue,
  isRequired = false,
  isMulti = false,
  placeholder = "Select options...",
}: SelectFieldProps) {
  const [selected, setSelected] = useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!defaultValue) setSelected([]);
    else
      setSelected(Array.isArray(defaultValue) ? defaultValue : [defaultValue]);
  }, [defaultValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleOption = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();

    if (isMulti) {
      const isSelected = selected.includes(value);
      const newSelected = isSelected
        ? selected.filter((v) => v !== value)
        : [...selected, value];
      setSelected(newSelected);
      setSearchTerm(""); // Reset search after select
    } else {
      setSelected([value]);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const removeOption = (e: React.MouseEvent, value: string) => {
    e.stopPropagation();
    setSelected(selected.filter((v) => v !== value));
  };

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayValue = isMulti ? selected : selected[0];
  const formValue = isMulti
    ? selected.length === 0
      ? ""
      : JSON.stringify(selected)
    : selected[0] || "";

  return (
    <div className="vertical-field space-y-1.5 relative" ref={containerRef}>
      <label className="text-[9px] uppercase tracking-widest text-muted font-bold ml-1">
        {label}
      </label>

      {/* Hidden input for form submission & validation */}
      <input
        type="hidden"
        name={name}
        value={formValue}
        data-required={isRequired ? true : undefined}
      />

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 border border-white/5 hover:border-white/20 px-4 py-2 min-h-[46px] text-xs outline-none transition-all text-white flex flex-wrap gap-2 items-center cursor-pointer shadow-lg"
      >
        {selected.length > 0 ? (
          selected.map((val) => (
            <span
              key={val}
              className="px-2 py-1 bg-white/10 rounded flex items-center gap-1 text-[10px] uppercase font-bold text-white/90"
            >
              {val}
              {isMulti && (
                <HiX
                  className="hover:text-red-400 cursor-pointer text-xs"
                  onClick={(e) => removeOption(e, val)}
                />
              )}
            </span>
          ))
        ) : (
          <span className="text-white/20 tracking-wider">{placeholder}</span>
        )}
        <HiChevronDown
          className={`ml-auto text-white/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div
          className="absolute z-[100] top-[calc(100%+4px)] left-0 w-full bg-[#111111] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-h-72 overflow-hidden flex flex-col animate-reveal backdrop-blur-md rounded-sm"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the container itself
        >
          {/* Search Input */}
          <div className="p-2 border-b border-white/5 bg-white/5">
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="w-full bg-black/40 border border-white/5 px-3 py-2 text-[10px] outline-none text-white focus:border-white/20 transition-all placeholder:text-white/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar max-h-60">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => {
                const isSelected = selected.includes(option.value);
                return (
                  <div
                    key={option.value}
                    onClick={(e) => toggleOption(e, option.value)}
                    className={`px-4 py-3 text-[11px] font-medium flex justify-between items-center cursor-pointer transition-all border-b border-white/[0.02] last:border-0 ${
                      isSelected
                        ? "bg-white/10 text-white"
                        : "text-white/40 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {option.label}
                    {isSelected && <HiCheck className="text-white" />}
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-3 text-xs text-white/20 italic">
                No matching results
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
