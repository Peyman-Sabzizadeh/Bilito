"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  ListBox,
  Select,
  Spinner,
  TextArea,
  TextField,
} from "@heroui/react";
import { contactSubjects } from "../_data/contactSubjects";
import { useState } from "react";
import useContactSubmit from "../_hooks/useContactSubmit";

export default function ContactForm() {
  const [messageValue, setMessageValue] = useState("");
  const { handleContactSubmit, isLoading } = useContactSubmit(setMessageValue);
  return (
    <Form
      onSubmit={handleContactSubmit}
      className="border-gray-2 space-y-6 rounded-lg border px-2 py-4 md:gap-8 md:p-4"
    >
      <h2 className="text-gray-7 text-xl font-bold whitespace-nowrap">
        فرم تماس با ما
      </h2>
      <div className="flex justify-between gap-4 max-md:flex-col md:gap-12">
        <div className="min-w-0 flex-1 space-y-4">
          <TextField
            name="name"
            type="text"
            aria-label="نام و نام خانوادگی"
            isRequired
            isDisabled={isLoading}
            validate={(value) =>
              value.trim().length > 0 || "نام و نام خانوادگی را وارد کنید."
            }
          >
            <Input
              placeholder="نام و نام خانوادگی"
              className="placeholder:text-gray-8 border-gray-3 focus:ring-primary rounded-lg border text-sm shadow-none focus:ring"
            />
            <FieldError />
          </TextField>
          <TextField
            name="email"
            type="email"
            aria-label="ایمیل"
            isRequired
            isDisabled={isLoading}
            validate={(value) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
              "یک ایمیل معتبر وارد کنید."
            }
          >
            <Input
              placeholder="ایمیل"
              className="placeholder:text-gray-8 border-gray-3 focus:ring-primary rounded-lg border text-sm shadow-none focus:ring"
            />
            <FieldError />
          </TextField>
          <Select
            name="subject"
            placeholder="موضوع"
            aria-label="موضوع"
            isRequired
            isDisabled={isLoading}
          >
            <Select.Trigger className="border-gray-3 rounded-lg border shadow-none">
              <Select.Value className="text-gray-8 text-sm" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover className="w-70 md:min-w-0">
              <ListBox className="text-gray-8">
                {contactSubjects.map((subject) => (
                  <ListBox.Item
                    key={subject.id}
                    id={subject.id}
                    textValue={subject.title}
                  >
                    {subject.title}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
        <div className="min-w-0 flex-1 space-y-4">
          <TextField
            name="message"
            type="text"
            aria-label="پیام"
            isRequired
            isDisabled={isLoading}
            validate={(value) =>
              value.trim().length > 0 || "پیام را وارد کنید."
            }
          >
            <TextArea
              placeholder="پیام"
              aria-describedby="textarea-description"
              maxLength={280}
              fullWidth
              value={messageValue}
              onChange={(event) => setMessageValue(event.target.value)}
              className="placeholder:text-gray-8 border-gray-3 focus:ring-primary h-15 rounded-lg border text-sm shadow-none focus:ring max-md:max-h-35 max-md:min-h-15 md:h-36 md:resize-none"
            />
            <FieldError />
            <p
              id="textarea-description"
              className="text-muted text-xs text-wrap wrap-break-word"
            >
              کاراکترها: {messageValue.length} / 280
            </p>
          </TextField>
          <Button
            type="submit"
            fullWidth
            isPending={isLoading}
            className="bg-primary rounded-lg font-normal"
          >
            {isLoading ? <Spinner size="sm" color="current" /> : "ارسال پیام"}
          </Button>
        </div>
      </div>
    </Form>
  );
}
