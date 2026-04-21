"use client";

import { useEffect, useState } from "react";
import { MdSave, MdSchool, MdAdd } from "react-icons/md";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import ActionButtons from "@/components/ui/ActionButtons";

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

const EducationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [selectedEntry, setSelectedEntry] = useState<EducationEntry | null>(
    null,
  );
  const [education, setEducation] = useState<EducationEntry[]>([]);

  useEffect(() => {
    setEducation(initialEducation);
  }, [initialEducation]);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: EducationEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleRemoveEntry = (id: string) => {
    // TODO: Remove entry from database
  };

  const handleSave = (values: Record<string, FormDataEntryValue>) => {
    const payload = {
      degree: values.degree || "",
      duration: values.duration || "",
      institution: values.institution || "",
    };

    if (selectedEntry) {
      handleUpdateEntry(payload);
    } else {
      handleAddEntry(payload);
    }
  };

  const handleAddEntry = (values: Record<string, FormDataEntryValue>) => {
    // TODO: Add entry in database
  };

  const handleUpdateEntry = (values: Record<string, FormDataEntryValue>) => {
    // TODO: Update entry in database
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
    },
    {
      key: "degree",
      header: "Degree / Certification",
    },
    {
      key: "duration",
      header: "Duration",
      headerClassName: "w-40",
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
        title="Education History"
        subtitle="Academic Foundation"
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
          defaultValue="Academic Foundation."
        />

        {/* Education Entries Container */}
        <FieldGroup
          title="Education Certificates"
          icon={MdSchool}
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
          <DataTable columns={columns} data={education} />
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
                handleRemoveEntry(selectedEntry?.id);
              }}
            />
          )
        }
        setIsOpen={setIsModalOpen}
        buttonText={selectedEntry ? "Update" : "Save"}
        title={selectedEntry ? "Edit Entry" : "Add New Entry"}
      >
        <Form
          key={selectedEntry?.id || "add"}
          form="form"
          onSubmit={handleSave}
          className="space-y-4"
        >
          <InputField
            name="institution"
            label="Institution Name"
            defaultValue={selectedEntry?.institution}
          />
          <InputField
            isRequired
            name="degree"
            label="Degree / Certification"
            defaultValue={selectedEntry?.degree}
          />
          <InputField
            name="duration"
            label="Duration"
            defaultValue={selectedEntry?.duration}
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
          setIsDeleteModalOpen(false)
          setIsSuccessModalOpen(true)
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

export default EducationPage;
