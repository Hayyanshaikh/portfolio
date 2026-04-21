"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

interface ModalProps {
  form?: string;
  title?: string;
  isOpen: boolean;
  buttonText?: string;
  onClose?: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  form,
  title,
  isOpen,
  onClose,
  children,
  setIsOpen,
  onConfirm,
  size = "md",
  buttonText = "Yes",
  showCloseButton = true,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setAnimationActive(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setAnimationActive(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
  };

  if (!isMounted || !shouldRender) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
    full: "max-w-[95vw] h-[90vh]",
  };

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ease-out ${
        animationActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          animationActive ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={`relative flex flex-col w-full ${
          sizeClasses[size]
        } bg-[var(--surface)] border border-white/10 rounded-sm overflow-hidden shadow-2xl transition-all duration-300 ease-out ${
          animationActive
            ? "scale-100 translate-y-0"
            : "scale-95 translate-y-4 shadow-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-2 border-b border-white/5 bg-white/[0.02]">
          {title ? (
            <h3 className="text-xl font-heading font-bold tracking-tight text-white">
              {title}
            </h3>
          ) : (
            <div />
          )}
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 group"
              aria-label="Close modal"
            >
              <IoClose
                size={24}
                className="group-active:scale-90 transition-transform"
              />
            </button>
          )}
        </div>

        {/* Body */}
        <div className="p-6 flex-1 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3 justify-end px-6 py-2 border-t border-white/5 bg-white/[0.02]">
          <Button onClick={handleClose} variant="outline" size="sm">
            Close
          </Button>
          <Button
            size="sm"
            form={form}
            variant="solid"
            onClick={onConfirm}
            type={form ? "submit" : "button"}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
