"use client";

import { useEffect, useState } from "react";
import { MdSave, MdAdd } from "react-icons/md";
import { FaRoad } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import ActionButtons from "@/components/ui/ActionButtons";

interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  active: boolean;
}

const initialExperience: ExperienceEntry[] = [
  {
    id: "1",
    company: "Viabletree",
    role: "Associate Software Engineer",
    period: "Sept 2024 — Present",
    description: "Leading the development of enterprise-level ERP modules using Next.js, TypeScript, and Ant Design. Responsible for building scalable frontend architecture, optimizing performance, and integrating backend APIs for real-time business operations.",
    active: true,
  },
  {
    id: "2",
    company: "Techonza Technology",
    role: "Frontend Developer",
    period: "Dec 2021 — Sept 2024",
    description: "Converted complex Figma designs into responsive and interactive web applications using React.js and Tailwind CSS. Built reusable component libraries, integrated REST APIs, and collaborated closely with backend teams.",
    active: false,
  },
];

const ExperiencePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [selectedEntry, setSelectedEntry] = useState<ExperienceEntry | null>(
    null,
  );
  const [experience, setExperience] = useState<ExperienceEntry[]>([]);

  useEffect(() => {
    setExperience(initialExperience);
  }, []);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: ExperienceEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleRemoveEntry = (id: string) => {
    setExperience(prev => prev.filter(item => item.id !== id));
  };

  const handleSave = (values: Record<string, any>) => {
    const payload = {
      id: selectedEntry?.id || Math.random().toString(36).substr(2, 9),
      role: values.role || "",
      period: values.period || "",
      company: values.company || "",
      description: values.description || "",
      active: !!values.active,
    };

    if (selectedEntry) {
      setExperience(prev => prev.map(item => item.id === selectedEntry.id ? payload : item));
    } else {
      setExperience(prev => [...prev, payload]);
    }
    setIsModalOpen(false);
  };

  const columns: ColumnDef<ExperienceEntry>[] = [
    {
      key: "sno",
      header: "S.No",
      headerClassName: "w-16",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "company",
      header: "Company",
    },
    {
      key: "role",
      header: "Job Role",
    },
    {
      key: "period",
      header: "Duration",
      headerClassName: "w-48",
    },
    {
        key: "status",
        header: "Status",
        headerClassName: "w-24",
        render: (entry) => (
            <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${entry.active ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/40'}`}>
                {entry.active ? 'Active' : 'Past'}
            </span>
        )
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
        title="Career Roadmap"
        subtitle="Professional Experience"
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
        {/* Section Settings */}
        <InputField
          isRequired
          name="sectionHeading"
          label="Section Heading"
          defaultValue="Career Roadmap."
        />

        {/* Experience Entries Container */}
        <FieldGroup
          title="Work Experience"
          icon={FaRoad}
          rightAction={
            <Button
              variant="outline"
              size="xs"
              onClick={handleAddEntryModal}
              icon={<MdAdd className="text-sm" />}
            >
              Add Record
            </Button>
          }
        >
          <DataTable columns={columns} data={experience} />
        </FieldGroup>
      </Form>

      <Modal
        size="xl"
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
        title={selectedEntry ? "Edit Experience" : "Add New Experience"}
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
              name="company"
              label="Company Name"
              defaultValue={selectedEntry?.company}
            />
            <InputField
              isRequired
              name="role"
              label="Job Role"
              defaultValue={selectedEntry?.role}
            />
          </div>
          <InputField
            isRequired
            name="period"
            label="Duration (e.g., Jan 2023 — Present)"
            defaultValue={selectedEntry?.period}
          />
          <InputField
            name="description"
            label="Job Description"
            isTextArea
            rows={4}
            defaultValue={selectedEntry?.description}
          />
          <div className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
             <input 
                type="checkbox" 
                id="active" 
                name="active" 
                defaultChecked={selectedEntry?.active}
                className="w-4 h-4 rounded border-white/20 bg-transparent text-primary focus:ring-primary/20"
             />
             <label htmlFor="active" className="text-sm font-medium text-white/70 cursor-pointer">
                Currently working here (Active)
             </label>
          </div>
        </Form>
      </Modal>

      <Modal
        type="warning"
        buttonText="Yes"
        title="Are you sure"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        description="Are you sure you want to delete this record?"
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
        description="Record deleted successfully!"
        onConfirm={() => {
          setIsModalOpen(false);
          setIsSuccessModalOpen(false);
        }}
      />
    </div>
  );
};

export default ExperiencePage;
