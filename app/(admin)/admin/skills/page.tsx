"use client";

import { useEffect, useState } from "react";
import { MdSave, MdAdd, MdLayers } from "react-icons/md";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import ActionButtons from "@/components/ui/ActionButtons";

import { initialSkills, SkillEntry } from "@/app/data/skills";

const SkillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [selectedEntry, setSelectedEntry] = useState<SkillEntry | null>(
    null,
  );
  const [skills, setSkills] = useState<SkillEntry[]>([]);

  useEffect(() => {
    setSkills(initialSkills);
  }, []);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: SkillEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleSave = (values: Record<string, FormDataEntryValue>) => {
    const payload = {
      label: (values.label as string) || "",
      icon: (values.icon as string) || "",
    };

    if (selectedEntry) {
      setSkills((prev) =>
        prev.map((s) => (s.id === selectedEntry.id ? { ...s, ...payload } : s))
      );
    } else {
      const newSkill = {
        id: Math.random().toString(36).substr(2, 9),
        ...payload,
      };
      setSkills((prev) => [...prev, newSkill]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedEntry) {
      setSkills((prev) => prev.filter((s) => s.id !== selectedEntry.id));
      setIsDeleteModalOpen(false);
      setIsSuccessModalOpen(true);
    }
  };

  const columns: ColumnDef<SkillEntry>[] = [
    {
      key: "sno",
      header: "S.No",
      headerClassName: "w-16",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "label",
      header: "Skill Label",
    },
    {
      key: "icon",
      header: "Icon Name",
      headerClassName: "w-40",
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
        title="Skills Management"
        subtitle="Technological Stack"
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
        <InputField
          isRequired
          name="sectionHeading"
          label="Section Heading"
          defaultValue="Technological Stack."
        />

        <FieldGroup
          title="Skills List"
          icon={MdLayers}
          rightAction={
            <Button
              variant="outline"
              size="xs"
              onClick={handleAddEntryModal}
              icon={<MdAdd className="text-sm" />}
            >
              Add Skill
            </Button>
          }
        >
          <DataTable columns={columns} data={skills} />
        </FieldGroup>
      </div>

      <Modal
        size="xl"
        form="skillForm"
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
        title={selectedEntry ? "Edit Skill" : "Add New Skill"}
      >
        <Form
          key={selectedEntry?.id || "add"}
          form="skillForm"
          onSubmit={handleSave}
          className="space-y-4"
        >
          <InputField
            isRequired
            name="label"
            label="Skill Label"
            defaultValue={selectedEntry?.label}
            placeholder="e.g. Next.js"
          />
          <InputField
            isRequired
            name="icon"
            label="Icon Component Name"
            defaultValue={selectedEntry?.icon}
            placeholder="e.g. NextJs, ReactJs, Tailwind"
          />
        </Form>
      </Modal>

      <Modal
        type="warning"
        buttonText="Yes"
        title="Are you sure"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        description="Are you sure you want to delete this skill?"
        onConfirm={handleDelete}
      />

      <Modal
        type="success"
        buttonText="Ok"
        title="Success"
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
        description="Skill deleted successfully!"
        onConfirm={() => {
          setIsSuccessModalOpen(false);
        }}
      />
    </div>
  );
};

export default SkillsPage;
