import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import IconButton from "./IconButton";

interface ActionButtonsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  showDelete?: boolean;
  showEdit?: boolean;
  editTitle?: string;
  deleteTitle?: string;
  children?: React.ReactNode;
  className?: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onEdit,
  onDelete,
  children,
  className = "",
  showEdit = true,
  showDelete = true,
  editTitle = "Edit Entry",
  deleteTitle = "Remove Entry",
}) => {
  return (
    <div className={`flex justify-end gap-1.5 ${className}`}>
      {children}
      {showEdit && (
        <IconButton
          onClick={onEdit}
          title={editTitle}
          icon={<FaPencilAlt className="text-xs" />}
        />
      )}
      {showDelete && (
        <IconButton
          onClick={onDelete}
          variant="danger"
          title={deleteTitle}
          icon={<FaTrash className="text-xs" />}
        />
      )}
    </div>
  );
};

export default ActionButtons;




