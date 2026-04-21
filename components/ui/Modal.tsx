"use client";

import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { FiAlertTriangle, FiCheckSquare, } from "react-icons/fi";
import { TbAlertCircle } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import IconButton from "./IconButton";

interface ModalProps {
  form?: string;
  title?: string;
  isOpen: boolean;
  buttonText?: string;
  description?: string;
  onClose?: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  footerAction?: React.ReactNode;
  type?: "default" | "success" | "error" | "warning";
}

const Modal: React.FC<ModalProps> = ({
  form,
  title = "Modal Title",
  isOpen,
  children,
  setIsOpen,
  onClose,
  onConfirm,
  size = "md",
  description,
  buttonText = "Save",
  footerAction,
  type = "default",
}) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setAnimate(true), 10);
      document.body.style.overflow = "hidden";
    } else {
      setAnimate(false);
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = "auto";
      }, 300);
    }
  }, [isOpen]);

  if (!show) return null;

  const handleClose = () => {
    onClose?.();
    setIsOpen(false);
  };

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-2xl",
    full: "max-w-[95vw] h-[90vh]",
  };

  const iconMap = {
    success: <FaRegCheckCircle size={20} className="text-green-500" />,
    error: <TbAlertCircle size={20} className="text-red-500" />,
    warning: <FiAlertTriangle size={20} className="text-yellow-500" />,
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${animate ? "opacity-100" : "opacity-0"
        } bg-black/70 backdrop-blur-sm`}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${sizeClasses[size]} bg-[var(--surface)] border border-white/10 rounded-sm shadow-xl transition-all duration-300 ${animate ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
          <h3 className="text-white font-semibold flex items-center gap-2">
            {type !== "default" && <span>{iconMap[type]}</span>}
            {title}
          </h3>

          <IconButton variant="ghost" icon={<IoClose size={20} />} onClick={handleClose} />
        </div>

        {/* Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {children ? children : <p className="text-sm text-white/50">{description}</p>}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10">
          <div>{footerAction}</div>

          <div className="flex gap-3">
            {
              type !== "success" && (
                <Button size="xs" variant="outline" onClick={handleClose}>
                  {type === "warning" ? "No" : "Close"}
                </Button>)
            }

            <Button
              size="xs"
              form={form}
              onClick={onConfirm}
              type={form ? "submit" : "button"}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;