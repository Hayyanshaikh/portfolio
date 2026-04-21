"use client";

import { useEffect, useState } from "react";
import { MdSave, MdAdd } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import ActionButtons from "@/components/ui/ActionButtons";

interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  category: string;
  badge?: string | null;
  version?: string | null;
  tags: string[];
  iconKey?: string;
}

const initialProjects: ProjectEntry[] = [
  {
    id: "1",
    category: "Learning Management",
    version: "v0.1",
    title: "SkillGro Platform",
    description: "SkillGro is a high-performance Learning Management System (LMS) designed for industry professionals to curate and deliver elite educational content. The architecture utilizes Next.js for server-side optimization and features a robust tracking engine that monitors student progression in real-time.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    badge: null,
  },
  {
    id: "2",
    category: "SaaS / Enterprise",
    version: null,
    title: "My School ERP",
    description: "A sophisticated School Management ERP engineered with Next.js and TypeScript to automate educational administration. The system features a custom integration with the ChatGPT API to generate automated academic reports, student performance insights, and administrative summaries.",
    tags: ["TypeScript", "AI Integration", "Full Stack"],
    badge: "Development",
  },
];

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [selectedEntry, setSelectedEntry] = useState<ProjectEntry | null>(
    null,
  );
  const [projects, setProjects] = useState<ProjectEntry[]>([]);

  useEffect(() => {
    setProjects(initialProjects);
  }, []);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: ProjectEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleRemoveEntry = (id: string) => {
    setProjects(prev => prev.filter(item => item.id !== id));
  };

  const handleSave = (values: Record<string, any>) => {
    // Process tags: convert comma-separated string to array
    const tagsArray = typeof values.tags === 'string' 
      ? values.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== "")
      : (Array.isArray(values.tags) ? values.tags : []);

    const payload: ProjectEntry = {
      id: selectedEntry?.id || Math.random().toString(36).substr(2, 9),
      title: values.title || "",
      category: values.category || "",
      version: values.version || null,
      badge: values.badge || null,
      description: values.description || "",
      tags: tagsArray,
      iconKey: values.iconKey || "FaDiagramProject",
    };

    if (selectedEntry) {
      setProjects(prev => prev.map(item => item.id === selectedEntry.id ? payload : item));
    } else {
      setProjects(prev => [...prev, payload]);
    }
    setIsModalOpen(false);
  };

  const columns: ColumnDef<ProjectEntry>[] = [
    {
      key: "sno",
      header: "S.No",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "title",
      header: "Project Title",
    },
    {
      key: "category",
      header: "Category",
    },
    {
      key: "version",
      header: "Version/Badge",
      render: (entry) => (
        <div className="flex items-center gap-2">
            {entry.badge ? (
                <span className="px-2 py-0.5 bg-white/5 text-[9px] font-bold uppercase rounded border border-white/10">
                    {entry.badge}
                </span>
            ) : (
                <span className="text-[10px] font-mono text-white/40 uppercase">
                    {entry.version || "n/a"}
                </span>
            )}
        </div>
      )
    },
    {
      key: "actions",
      header: "Actions",
      headerClassName: "text-right",
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
        title="Project Registry"
        subtitle="Selected Works"
        action={
          <Button
            variant="solid"
            form="sectionForm"
            type="submit"
            size="sm"
            icon={<MdSave className="text-sm" />}
          >
            Save
          </Button>
        }
      />

      <Form form="sectionForm" onSubmit={() => { }} className="space-y-6">
        <InputField
          isRequired
          name="sectionHeading"
          label="Section Heading"
          defaultValue="Selected Registry."
        />

        <FieldGroup
          title="Project List"
          icon={FaDiagramProject}
          rightAction={
            <Button
              variant="outline"
              size="xs"
              onClick={handleAddEntryModal}
              icon={<MdAdd className="text-sm" />}
            >
              Add Project
            </Button>
          }
        >
          <DataTable columns={columns} data={projects} />
        </FieldGroup>
      </Form>

      <Modal
        size="2xl"
        form="form"
        isOpen={isModalOpen}
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
        setIsOpen={setIsModalOpen}
        buttonText={selectedEntry ? "Update" : "Save"}
        title={selectedEntry ? "Edit Project" : "Add New Project"}
      >
        <Form
          key={selectedEntry?.id || "add"}
          form="form"
          onSubmit={handleSave}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              isRequired
              name="title"
              label="Project Title"
              defaultValue={selectedEntry?.title}
            />
            <InputField
              isRequired
              name="category"
              label="Category"
              defaultValue={selectedEntry?.category}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              name="version"
              label="Version (e.g., v1.0)"
              defaultValue={selectedEntry?.version || ""}
            />
            <InputField
              name="badge"
              label="Badge (optional)"
              defaultValue={selectedEntry?.badge || ""}
              placeholder="e.g., Development, Featured"
            />
          </div>

          <InputField
            name="tags"
            label="Tech Stack (Comma-separated)"
            defaultValue={selectedEntry?.tags.join(", ")}
            placeholder="Next.js, Tailwind, Prisma"
          />

          <InputField
            name="description"
            label="Project Description"
            isTextArea
            rows={5}
            defaultValue={selectedEntry?.description}
          />
        </Form>
      </Modal>

      <Modal
        type="warning"
        buttonText="Yes"
        title="Are you sure"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        description="Are you sure you want to delete this project?"
        onConfirm={() => {
          if (selectedEntry) {
            handleRemoveEntry(selectedEntry.id);
          }
          setIsDeleteModalOpen(false);
          setIsSuccessModalOpen(true);
        }}
      />

      <Modal
        type="success"
        buttonText="Ok"
        title="Success"
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
        description="Project deleted successfully!"
        onConfirm={() => {
          setIsModalOpen(false);
          setIsSuccessModalOpen(false);
        }}
      />
    </div>
  );
};

export default ProjectsPage;
