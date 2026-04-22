"use client";

import { useEffect, useState } from "react";
import { MdSave, MdAdd, MdSettingsSuggest } from "react-icons/md";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import ActionButtons from "@/components/ui/ActionButtons";

interface ServiceEntry {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const initialServices: ServiceEntry[] = [
  {
    id: "1",
    title: "Enterprise ERP Solutions",
    description:
      "Architecting scalable and robust ERP modules that streamline complex business processes and real-time operations.",
    icon: "FaLayerGroup",
  },
  {
    id: "2",
    title: "Full-Stack Development",
    description:
      "Building production-grade SaaS applications from scratch using modern tech stacks like Next.js, Node.js, and TypeScript.",
    icon: "FaCode",
  },
  {
    id: "3",
    title: "Performance Optimization",
    description:
      "Enhancing web performance through advanced code-splitting, lazy loading, and efficient API orchestration.",
    icon: "FaRocket",
  },
  {
    id: "4",
    title: "Custom UI/UX Implementation",
    description:
      "Translating complex Figma designs into interactive, pixel-perfect, and highly responsive user interfaces.",
    icon: "FaTerminal",
  },
];

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [selectedEntry, setSelectedEntry] = useState<ServiceEntry | null>(
    null,
  );
  const [services, setServices] = useState<ServiceEntry[]>([]);

  useEffect(() => {
    setServices(initialServices);
  }, []);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: ServiceEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleSave = (values: Record<string, FormDataEntryValue>) => {
    const payload = {
      title: (values.title as string) || "",
      description: (values.description as string) || "",
      icon: (values.icon as string) || "",
    };

    if (selectedEntry) {
      setServices((prev) =>
        prev.map((s) => (s.id === selectedEntry.id ? { ...s, ...payload } : s))
      );
    } else {
      const newService = {
        id: Math.random().toString(36).substr(2, 9),
        ...payload,
      };
      setServices((prev) => [...prev, newService]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedEntry) {
      setServices((prev) => prev.filter((s) => s.id !== selectedEntry.id));
      setIsDeleteModalOpen(false);
      setIsSuccessModalOpen(true);
    }
  };

  const columns: ColumnDef<ServiceEntry>[] = [
    {
      key: "sno",
      header: "S.No",
      headerClassName: "w-16",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "title",
      header: "Service Title",
    },
    {
      key: "description",
      header: "Description",
      cellClassName: "max-w-md truncate text-muted",
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
        title="Services Management"
        subtitle="Configure the services you offer"
        action={
          <Button
            variant="solid"
            size="sm"
            icon={<MdSave className="text-sm" />}
            onClick={() => {
              // Simulate deploy
              alert("Changes deployed to website!");
            }}
          >
            Deploy Changes
          </Button>
        }
      />

      <div className="space-y-6">
        <InputField
          isRequired
          name="sectionHeading"
          label="Section Heading"
          defaultValue="What I Offer."
        />

        <FieldGroup
          title="Service Offerings"
          icon={MdSettingsSuggest}
          rightAction={
            <Button
              variant="outline"
              size="xs"
              onClick={handleAddEntryModal}
              icon={<MdAdd className="text-sm" />}
            >
              Add Service
            </Button>
          }
        >
          <DataTable columns={columns} data={services} />
        </FieldGroup>
      </div>

      <Modal
        size="xl"
        form="serviceForm"
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
        title={selectedEntry ? "Edit Service" : "Add New Service"}
      >
        <Form
          key={selectedEntry?.id || "add"}
          form="serviceForm"
          onSubmit={handleSave}
          className="space-y-4"
        >
          <InputField
            isRequired
            name="title"
            label="Service Title"
            defaultValue={selectedEntry?.title}
            placeholder="e.g. Full-Stack Development"
          />
          <InputField
            isRequired
            name="icon"
            label="Icon Name (e.g. FaCode)"
            defaultValue={selectedEntry?.icon}
            placeholder="e.g. FaCode, FaRocket, FaTerminal"
          />
          <InputField
            isRequired
            isTextArea={true}
            name="description"
            label="Service Description"
            defaultValue={selectedEntry?.description}
            placeholder="Describe what you offer in this service..."
          />
        </Form>
      </Modal>

      <Modal
        type="warning"
        buttonText="Yes"
        title="Are you sure"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        description="Are you sure you want to delete this service?"
        onConfirm={handleDelete}
      />

      <Modal
        type="success"
        buttonText="Ok"
        title="Success"
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
        description="Service deleted successfully!"
        onConfirm={() => {
          setIsSuccessModalOpen(false);
        }}
      />
    </div>
  );
};

export default ServicesPage;
