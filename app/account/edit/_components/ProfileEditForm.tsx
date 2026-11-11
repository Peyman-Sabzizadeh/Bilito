"use client";

import { Button, Form, Spinner } from "@heroui/react";
import { profileEditFormFields } from "../_data/profileEditFormFields";
import ProfileEditField from "./ProfileEditField";
import { useAuth } from "@/_providers/AuthProvider";
import useEditSubmit from "../_hooks/useEditSubmit";

export default function ProfileEditForm() {
  const { profile } = useAuth();
  const { handleEditSubmit, isLoading } = useEditSubmit();
  return (
    <Form
      onSubmit={handleEditSubmit}
      className="md:border-gray-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:rounded-lg md:border md:p-4"
    >
      {profileEditFormFields.map((field) => (
        <ProfileEditField
          key={field.name}
          field={field}
          defaultValue={profile?.[field.name]}
        />
      ))}
      <Button
        type="submit"
        isPending={isLoading}
        className="bg-primary hover:bg-shade-2 rounded-lg font-normal max-md:mt-6 max-md:w-full md:col-span-2 md:w-50 md:justify-self-end"
      >
        {isLoading ? <Spinner size="sm" color="current" /> : "ذخیره اطلاعات"}
      </Button>
    </Form>
  );
}
