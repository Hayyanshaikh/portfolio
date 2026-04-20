"use client";

import { useState } from "react";
import { MdSave, MdSchool, MdAdd } from "react-icons/md";
import { HiX } from "react-icons/hi";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/admin/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";

interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  duration: string;
}

const initialEducation: EducationEntry[] = [
  {
    id: "1",
    institution: "Aptech Learning, Karachi",
    degree: "Professional Diploma in Frontend Development",
    duration: "2021-2022",
  },
  {
    id: "2",
    institution: "SM Government Arts & Commerce",
    degree: "Intermediate Certification in Commerce",
    duration: "2021-2023",
  },
];

export default function EducationPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [education, setEducation] = useState<EducationEntry[]>(initialEducation);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  const handleAddEntry = () => {
    const newEntry: EducationEntry = {
      id: Math.random().toString(36).substr(2, 9),
      institution: "",
      degree: "",
      duration: "",
    };
    setEducation([...education, newEntry]);
  };

  const handleRemoveEntry = (id: string) => {
    setEducation(education.filter((entry) => entry.id !== id));
  };

  const handleUpdateEntry = (id: string, field: keyof EducationEntry, value: string) => {
    setEducation(
      education.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const columns: ColumnDef<EducationEntry>[] = [
    {
      key: "sno",
      header: "S.No",
      headerClassName: "w-16",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "institution",
      header: "Institution Name",
      render: (entry) => (
        <input
          type="text"
          value={entry.institution}
          onChange={(e) => handleUpdateEntry(entry.id, "institution", e.target.value)}
          className="w-full bg-transparent border-b border-transparent focus:border-white/20 outline-none text-white transition-colors pb-1 placeholder:text-white/20"
          placeholder="e.g. Aptech Learning"
        />
      ),
    },
    {
      key: "degree",
      header: "Degree / Certification",
      render: (entry) => (
        <input
          type="text"
          value={entry.degree}
          onChange={(e) => handleUpdateEntry(entry.id, "degree", e.target.value)}
          className="w-full bg-transparent border-b border-transparent focus:border-white/20 outline-none text-white transition-colors pb-1 placeholder:text-white/20"
          placeholder="e.g. Professional Diploma"
        />
      ),
    },
    {
      key: "duration",
      header: "Duration",
      headerClassName: "w-40",
      render: (entry) => (
        <input
          type="text"
          value={entry.duration}
          onChange={(e) => handleUpdateEntry(entry.id, "duration", e.target.value)}
          className="w-full bg-transparent border-b border-transparent focus:border-white/20 outline-none text-white transition-colors pb-1 placeholder:text-white/20"
          placeholder="e.g. 2021-2022"
        />
      ),
    },
    {
      key: "actions",
      header: "Actions",
      headerClassName: "text-right w-20",
      cellClassName: "text-right",
      render: (entry) => (
        <button
          onClick={() => handleRemoveEntry(entry.id)}
          className="text-muted hover:text-red-500 transition-colors p-2 inline-flex"
          title="Remove Entry"
        >
          <HiX className="text-lg" />
        </button>
      ),
    },
  ];

  return (
    <div className="animate-reveal space-y-4">
      <PageHeader
        title="Education History"
        subtitle="Academic Foundation"
        action={
          <Button
            onClick={handleSave}
            variant="solid"
            size="sm"
            icon={<MdSave className="text-sm" />}
          >
            {isSaving ? "Saving..." : "Deploy Changes"}
          </Button>
        }
      />

      <div className="space-y-6">
        {/* Section Settings */}
        <InputField
          label="Section Heading"
          defaultValue="Academic Foundation."
        />

        {/* Education Entries Container */}
        <FieldGroup
          title="Education Certificates"
          icon={MdSchool}
          rightAction={
            <button
              onClick={handleAddEntry}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-white transition-colors bg-white/5 border border-white/5 hover:border-white/20 px-3 py-1.5"
            >
              <MdAdd className="text-lg" />
              Add Record
            </button>
          }
        >
          <DataTable columns={columns} data={education} />
        </FieldGroup>
      </div>
    </div>
  );
}
