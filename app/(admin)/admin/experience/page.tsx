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
import DateField from "@/components/ui/DateField";

interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string; // The formatted string for display
  startDate: string;
  endDate?: string;
  description: string;
  active: boolean;
}

const initialExperience: ExperienceEntry[] = [
  {
    id: "1",
    company: "Viabletree",
    role: "Associate Software Engineer",
    period: "Sept 2024 — Present",
    startDate: "2024-09-01",
    endDate: "",
    description: "Leading the development of enterprise-level ERP modules using Next.js, TypeScript, and Ant Design. Responsible for building scalable frontend architecture, optimizing performance, and integrating backend APIs for real-time business operations.",
    active: true,
  },
  {
    id: "2",
    company: "Techonza Technology",
    role: "Frontend Developer",
    period: "Dec 2021 — Sept 2024",
    startDate: "2021-12-01",
    endDate: "2024-09-15",
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
  const [isEntryActive, setIsEntryActive] = useState<boolean>(false);

  useEffect(() => {
    setExperience(initialExperience);
  }, []);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsEntryActive(false);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: ExperienceEntry) => {
    setSelectedEntry(entry);
    setIsEntryActive(entry.active);
    setIsModalOpen(true);
  };

  const handleRemoveEntry = (id: string) => {
    setExperience(prev => prev.filter(item => item.id !== id));
  };

  const handleSave = (values: Record<string, any>) => {
    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    const start = formatDate(values.startDate);
    const end = !!values.active ? "Present" : formatDate(values.endDate);
    const period = `${start} — ${end}`;

    const payload = {
      id: selectedEntry?.id || Math.random().toString(36).substr(2, 9),
      role: values.role || "",
      company: values.company || "",
      startDate: values.startDate || "",
      endDate: values.endDate || "",
      period: period,
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
    },
    {
      key: "status",
      header: "Status",
      render: (entry) => (
        <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${entry.active ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/40'}`}>
          {entry.active ? 'Active' : 'Past'}
        </span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DateField
              isRequired
              name="startDate"
              label="Start Date"
              defaultValue={selectedEntry?.startDate}
            />
            <DateField
              name="endDate"
              label="End Date"
              isDisabled={isEntryActive}
              defaultValue={selectedEntry?.endDate}
            />
          </div>

          <div
            onClick={() => setIsEntryActive(!isEntryActive)}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${isEntryActive
              ? "bg-white/10 border-white/30"
              : "border-white/20 hover:bg-white/10"
              }`}
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Work Status</span>
              <span className="text-[11px] text-white/50 font-medium">I am currently working in this role</span>
            </div>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${isEntryActive ? "bg-black/40" : "bg-white/10"}`}>
              <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isEntryActive ? "right-1" : "left-1"}`} />
              <input
                type="checkbox"
                id="active"
                name="active"
                checked={isEntryActive}
                onChange={(e) => setIsEntryActive(e.target.checked)}
                className="sr-only"
              />
            </div>
          </div>
          <InputField
            name="description"
            label="Job Description"
            isTextArea
            rows={4}
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
