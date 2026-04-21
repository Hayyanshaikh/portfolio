"use client";

import { useState } from "react";
import { MdSave, MdBusiness, MdAdd } from "react-icons/md";
import { HiX } from "react-icons/hi";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/ui/InputField";
import DataTable, { ColumnDef } from "@/components/admin/DataTable";

const initialBrands = [
  "Viabletree",
  "Techonza",
  "Freelance",
  "Innovate Solutions",
  "Global Tech",
  "Digital Pulse",
  "NextGen ERP",
  "Cloud Stream",
];

export default function BrandsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [brands, setBrands] = useState<string[]>(initialBrands);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  const handleAddBrand = () => {
    const newIndex = brands.length;
    setBrands([...brands, ""]);
    setTimeout(() => {
      document.getElementById(`brand-input-${newIndex}`)?.focus();
    }, 50);
  };

  const handleRemoveBrand = (index: number) => {
    setBrands(brands.filter((_, i) => i !== index));
  };

  const columns: ColumnDef<string>[] = [
    {
      key: "sno",
      header: "S.No",
      headerClassName: "w-24",
      cellClassName: "text-sm font-mono text-muted",
      render: (_, index) => String(index + 1).padStart(2, "0"),
    },
    {
      key: "name",
      header: "Brand Name",
      render: (brand, index) => (
        <input
          id={`brand-input-${index}`}
          type="text"
          value={brand}
          onChange={(e) => {
            const newBrands = [...brands];
            newBrands[index] = e.target.value;
            setBrands(newBrands);
          }}
          className="w-full bg-transparent border-b border-transparent focus:border-white/20 outline-none text-white transition-colors pb-1 placeholder:text-white/20"
          placeholder="Enter brand name..."
        />
      ),
    },
    {
      key: "actions",
      header: "Actions",
      headerClassName: "text-right w-28",
      cellClassName: "text-right",
      render: (_, index) => (
        <button
          onClick={() => handleRemoveBrand(index)}
          className="text-muted hover:text-red-500 transition-colors p-2 inline-flex"
          title="Remove Brand"
        >
          <HiX className="text-lg" />
        </button>
      ),
    },
  ];

  return (
    <div className="animate-reveal space-y-4">
      <PageHeader
        title="Brand Collaborations"
        subtitle="Trusted Partners"
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
          defaultValue="Trusted by & Collaborated with"
        />

        {/* Brand Entries Container */}
        <FieldGroup
          title="Brand Entries"
          icon={MdBusiness}
          rightAction={
            <button
              onClick={handleAddBrand}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-white transition-colors bg-white/5 border border-white/5 hover:border-white/20 px-3 py-1.5"
            >
              <MdAdd className="text-lg" />
              Add Partner
            </button>
          }
        >
          <DataTable columns={columns} data={brands} />
        </FieldGroup>
      </div>
    </div>
  );
}
