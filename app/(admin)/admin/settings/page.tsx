"use client";

import { useState } from "react";
import {
  MdSave,
  MdPerson,
  MdLanguage,
  MdShare,
  MdContactPhone,
} from "react-icons/md";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/admin/PageHeader";
import FieldGroup from "@/components/admin/FieldGroup";
import InputField from "@/components/admin/InputField";

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  return (
    <div className="animate-reveal space-y-10 pb-20">
      <PageHeader
        title="System Settings"
        subtitle="Global Preferences"
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
        {/* Personal Details */}
        <FieldGroup title="Personal Assets" icon={MdPerson}>
          <InputField label="Universal Name" defaultValue="Hayyan Ali" />
          <InputField
            label="Professional Role"
            defaultValue="Software Engineer"
          />
        </FieldGroup>

        {/* Contact Matrix */}
        <FieldGroup title="Contact Matrix" icon={MdContactPhone}>
          <InputField
            label="Electronic Mail"
            type="email"
            defaultValue="hayyanshaikh55@gmail.com"
          />
          <InputField
            label="Direct Communication (Phone)"
            defaultValue="+92 317 2271459"
          />
        </FieldGroup>

        {/* Global SEO */}
        <FieldGroup title="Registry & SEO" icon={MdLanguage}>
          <InputField
            label="Registry Title"
            defaultValue="Hayyan Ali | Software Engineer Portfolio"
          />
          <InputField
            rows={6}
            isTextArea
            label="Registry Description"
            defaultValue="Building Scalable Digital Ecosystems. Specialized in Next.js and Cloud Technologies."
          />
        </FieldGroup>

        {/* Social Connections */}
        <FieldGroup title="Social Connections" icon={MdShare}>
          <InputField
            label="GitHub Path"
            defaultValue="https://github.com/hayyanshaikh"
          />
          <InputField
            label="LinkedIn Path"
            defaultValue="https://www.linkedin.com/in/hayyan-shaikh"
          />
          <InputField
            label="WhatsApp Interface"
            defaultValue="https://api.whatsapp.com/send/?phone=923172271459"
          />
        </FieldGroup>
      </div>
    </div>
  );
}
