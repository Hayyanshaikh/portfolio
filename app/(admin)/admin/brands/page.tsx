"use client";

import { useState } from "react";
import { MdSave, MdBusiness, MdAdd } from "react-icons/md";
import { HiX } from "react-icons/hi";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/admin/InputField";

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
    setBrands([...brands, ""]);
  };

  const handleRemoveBrand = (index: number) => {
    setBrands(brands.filter((_, i) => i !== index));
  };

  return (
    <div className="animate-reveal space-y-10 pb-20">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section Settings */}
        <div className="space-y-8">
          <FieldGroup title="Section configuration" icon={MdBusiness}>
            <InputField
              label="Section Heading"
              defaultValue="Trusted by & Collaborated with"
            />
          </FieldGroup>
        </div>

        {/* Brand Entries */}
        <div className="space-y-8">
          <FieldGroup title="Brand Entries" icon={MdBusiness}>
            <div className="space-y-4">
              {brands.map((brand, index) => (
                <div key={index} className="flex gap-4 items-end">
                  <div className="flex-1">
                    <InputField
                      label={`Brand Name ${index + 1}`}
                      placeholder="e.g. NextGen ERP"
                      defaultValue={brand}
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveBrand(index)}
                    className="h-[42px] px-4 bg-white/5 border border-white/5 hover:bg-red-500/10 hover:border-red-500/30 text-muted hover:text-red-500 transition-all rounded-none flex items-center justify-center"
                    title="Remove Brand"
                  >
                    <HiX className="text-lg" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleAddBrand}
              className="w-full flex items-center justify-center gap-2 mt-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-white px-4 py-4 transition-all"
            >
              <MdAdd className="text-lg" />
              Add Partner
            </button>
          </FieldGroup>
        </div>
      </div>
    </div>
  );
}
