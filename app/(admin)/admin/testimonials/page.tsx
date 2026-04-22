"use client";

import { useEffect, useState } from "react";
import { MdSave, MdAdd, MdFormatQuote } from "react-icons/md";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";
import Modal from "@/components/ui/Modal";
import Form from "@/components/ui/Form";
import ActionButtons from "@/components/ui/ActionButtons";

interface TestimonialEntry {
  id: string;
  name: string;
  title: string;
  quote: string;
}

const initialTestimonials: TestimonialEntry[] = [
  {
    id: "1",
    name: "Ahmer Farooq",
    title: "Founder @ Lakes America",
    quote: '"Lakes America project was delivered with extreme precision. Hayyan\'s ability to translate complex business needs into clean code is remarkable."',
  },
  {
    id: "2",
    name: "Haseeb Shoukat",
    title: "CEO @ Nexarce",
    quote: '"His expertise in ERP architecture is unparalleled. He built a system for us that scales effortlessly as our user base grows."',
  },
  {
    id: "3",
    name: "Dheraj Jolla",
    title: "Lead @ Resume Canada",
    quote: '"The Resume Canada platform was delivered ahead of schedule with pixel-perfect accuracy. A reliable engineer who understands deadlines."',
  },
];

const TestimonialsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [selectedEntry, setSelectedEntry] = useState<TestimonialEntry | null>(
    null,
  );
  const [testimonials, setTestimonials] = useState<TestimonialEntry[]>([]);

  useEffect(() => {
    setTestimonials(initialTestimonials);
  }, []);

  const handleAddEntryModal = () => {
    setSelectedEntry(null);
    setIsModalOpen(true);
  };

  const handleEditEntry = (entry: TestimonialEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleSave = (values: Record<string, FormDataEntryValue>) => {
    const payload = {
      name: (values.name as string) || "",
      title: (values.title as string) || "",
      quote: (values.quote as string) || "",
    };

    if (selectedEntry) {
      setTestimonials((prev) =>
        prev.map((t) => (t.id === selectedEntry.id ? { ...t, ...payload } : t))
      );
    } else {
      const newTestimonial = {
        id: Math.random().toString(36).substr(2, 9),
        ...payload,
      };
      setTestimonials((prev) => [...prev, newTestimonial]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedEntry) {
      setTestimonials((prev) => prev.filter((t) => t.id !== selectedEntry.id));
      setIsDeleteModalOpen(false);
      setIsSuccessModalOpen(true);
    }
  };

  const columns: ColumnDef<TestimonialEntry>[] = [
    {
      key: "sno",
      header: "S.No",
      headerClassName: "w-16",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "name",
      header: "Client Name",
      headerClassName: "w-48",
    },
    {
      key: "title",
      header: "Designation",
      headerClassName: "w-64",
      cellClassName: "text-muted",
    },
    {
      key: "quote",
      header: "Testimonial content",
      cellClassName: "text-muted max-w-sm truncate italic",
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
        title="Testimonials Management"
        subtitle="Trust Manifest"
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
          defaultValue="Trust Manifest."
        />

        <FieldGroup
          title="Client Feedback"
          icon={MdFormatQuote}
          rightAction={
            <Button
              variant="outline"
              size="xs"
              onClick={handleAddEntryModal}
              icon={<MdAdd className="text-sm" />}
            >
              Add Testimonial
            </Button>
          }
        >
          <DataTable columns={columns} data={testimonials} />
        </FieldGroup>
      </div>

      <Modal
        size="xl"
        form="testimonialForm"
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
        title={selectedEntry ? "Edit Testimonial" : "Add New Testimonial"}
      >
        <Form
          key={selectedEntry?.id || "add"}
          form="testimonialForm"
          onSubmit={handleSave}
          className="space-y-4"
        >
          <InputField
            isRequired
            name="name"
            label="Client Name"
            defaultValue={selectedEntry?.name}
            placeholder="e.g. John Doe"
          />
          <InputField
            isRequired
            name="title"
            label="Designation / Company"
            defaultValue={selectedEntry?.title}
            placeholder="e.g. CEO @ TechCorp"
          />
          <InputField
            isRequired
            name="quote"
            label="Testimonial Quote"
            defaultValue={selectedEntry?.quote}
            placeholder="What did they say about your work?"
          />
        </Form>
      </Modal>

      <Modal
        type="warning"
        buttonText="Yes"
        title="Are you sure"
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        description="Are you sure you want to delete this testimonial?"
        onConfirm={handleDelete}
      />

      <Modal
        type="success"
        buttonText="Ok"
        title="Success"
        isOpen={isSuccessModalOpen}
        setIsOpen={setIsSuccessModalOpen}
        description="Testimonial deleted successfully!"
        onConfirm={() => {
          setIsSuccessModalOpen(false);
        }}
      />
    </div>
  );
};

export default TestimonialsPage;
