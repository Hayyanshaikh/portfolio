"use client";

import { useEffect, useState } from "react";
import { MdSave, MdAdd, MdShare } from "react-icons/md";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import ActionButtons from "@/components/ui/ActionButtons";

interface SocialEntry {
  id: string;
  label: string;
  href: string;
  icon: string;
}

const initialSocials: SocialEntry[] = [
  {
    id: "1",
    label: "GitHub",
    href: "https://github.com/hayyanshaikh",
    icon: "FaGithub",
  },
  {
    id: "2",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hayyan-shaikh",
    icon: "FaLinkedinIn",
  },
  {
    id: "3",
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=923172271459",
    icon: "FaWhatsapp",
  },
];

const SocialsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [selectedEntry, setSelectedEntry] = useState<SocialEntry | null>(
    null,
  );
  const [socials, setSocials] = useState<SocialEntry[]>([]);

  useEffect(() => {
    setSocials(initialSocials);
  }, []);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: SocialEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleSave = (values: Record<string, FormDataEntryValue>) => {
    const payload = {
      label: (values.label as string) || "",
      href: (values.href as string) || "",
      icon: (values.icon as string) || "",
    };

    if (selectedEntry) {
      setSocials((prev) =>
        prev.map((s) => (s.id === selectedEntry.id ? { ...s, ...payload } : s))
      );
    } else {
      const newSocial = {
        id: Math.random().toString(36).substr(2, 9),
        ...payload,
      };
      setSocials((prev) => [...prev, newSocial]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedEntry) {
      setSocials((prev) => prev.filter((s) => s.id !== selectedEntry.id));
      setIsDeleteModalOpen(false);
      setIsSuccessModalOpen(true);
    }
  };

  const columns: ColumnDef<SocialEntry>[] = [
    {
      key: "sno",
      header: "S.No",
      headerClassName: "w-16",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "label",
      header: "Platform",
    },
    {
      key: "href",
      header: "Profile URL",
      cellClassName: "text-muted max-w-xs truncate",
    },
    {
      key: "icon",
      header: "Icon Name",
      headerClassName: "w-32",
      cellClassName: "font-mono text-xs text-muted",
    },
    {
      key: "actions",
      header: "Actions",
      headerClassName: "text-right w-24",
      cellClassName: "text-right",
      render: (entry) => (
        <ActionButtons
          onEdit={() => handleEditEntry(entry)}
          onDelete={() => {
            setSelectedEntry(entry);
            setIsDeleteModalOpen(true);
          }}
        />
      ),
    },
  ];

  return (
    <div className="animate-reveal space-y-4">
      <PageHeader
        title="Social Links"
        subtitle="Connect with me"
        action={
          <Button
            variant="solid"
            size="sm"
            icon={<MdSave className="text-sm" />}
            onClick={() => {
              alert("Changes deployed to website!");
            }}
          >
            Deploy Changes
          </Button>
        }
      />

      <div className="space-y-6">
        <FieldGroup
          title="Social Connections"
          icon={MdShare}
          rightAction={
            <Button
              variant="outline"
              size="xs"
              onClick={handleAddEntryModal}
              icon={<MdAdd className="text-sm" />}
            >
              Add Link
            </Button>
          }
        >
          <DataTable columns={columns} data={socials} />
        </FieldGroup>
      </div>

      <Modal
        size="xl"
        form="socialForm"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        footerAction={
          selectedEntry && (
            <ActionButtons
              showEdit={false}
              onDelete={() => {
                setIsDeleteModalOpen(true);
              }}
            />
          )
        }
        buttonText={selectedEntry ? "Update" : "Save"}
        title={selectedEntry ? "Edit Social" : "Add New Social"}
      >
        <Form
          key={selectedEntry?.id || "add"}
          form="socialForm"
          onSubmit={handleSave}
          className="space-y-4"
        >
          <InputField
            isRequired
            name="label"
            label="Platform Name"
            defaultValue={selectedEntry?.label}
            placeholder="e.g. LinkedIn"
          />
          <InputField
            isRequired
            name="href"
            label="Profile URL"
            defaultValue={selectedEntry?.href}
            placeholder="https://..."
          />
          <InputField
            isRequired
            name="icon"
            label="Icon Name (React Icons)"
            defaultValue={selectedEntry?.icon}
            placeholder="e.g. FaLinkedin, FaGithub"
          />
        </Form>
      </Modal>

      <Modal
        type="warning"
        buttonText="Yes"
        title="Are you sure"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        description="Are you sure you want to delete this social link?"
        onConfirm={handleDelete}
      />

      <Modal
        type="success"
        buttonText="Ok"
        title="Success"
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
        description="Social link deleted successfully!"
        onConfirm={() => {
          setIsSuccessModalOpen(false);
        }}
      />
    </div>
  );
};

export default SocialsPage;
