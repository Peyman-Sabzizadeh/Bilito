import Logo from "@/_components/Logo";
import { useState } from "react";
import { useAuthModal } from "@/_store/authModalStore";
import { ArrowRight } from "lucide-react";
import {
  Button,
  Checkbox,
  FieldError,
  Form,
  Input,
  ListBox,
  Modal,
  Select,
  TextField,
} from "@heroui/react";
import AuthSwitch from "./AuthSwitch";

const inputClassName =
  "placeholder:text-gray-8 border-gray-3 focus:ring-primary rounded-lg border text-sm shadow-none focus:ring-1";

export default function SignupForm() {
  const { onOpenChange } = useAuthModal();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <Modal.Header>
        <Logo className="m-auto w-fit" />
        <ArrowRight
          className="text-gray-7 size-7 cursor-pointer md:hidden"
          strokeWidth={1.5}
          onClick={() => onOpenChange(false)}
        />
        <Modal.Heading className="text-gray-8 text-center text-xl font-bold md:mt-4">
          ساخت حساب کاربری
        </Modal.Heading>
      </Modal.Header>
      <Modal.Body>
        <Form id="signup-form" className="flex flex-col gap-6 pt-15 md:pt-8">
          <TextField
            name="fullName"
            type="text"
            aria-label="نام و نام خانوادگی"
            isRequired
            validate={(value) =>
              value.trim().length > 0 || "نام و نام خانوادگی خود را وارد کنید."
            }
          >
            <Input
              placeholder="نام و نام خانوادگی"
              className={inputClassName}
            />
            <FieldError />
          </TextField>
          <TextField
            name="nationalCode"
            type="text"
            inputMode="numeric"
            aria-label="کد ملی"
            isRequired
            validate={(value) =>
              /^\d{10}$/.test(value) || "کد ملی باید 10 رقم باشد."
            }
          >
            <Input placeholder="کد ملی" className={inputClassName} />
            <FieldError />
          </TextField>
          <TextField
            name="phone"
            type="tel"
            aria-label="شماره تلفن"
            isRequired
            validate={(value) =>
              /^09\d{9}$/.test(value) || "یک شماره تلفن معتبر وارد کنید."
            }
          >
            <Input
              placeholder="شماره تلفن"
              className={`${inputClassName} text-right`}
            />
            <FieldError />
          </TextField>
          <Select
            name="gender"
            aria-label="جنسیت"
            placeholder="جنسیت"
            isRequired
          >
            <Select.Trigger className={inputClassName}>
              <Select.Value className="text-gray-8 text-sm" />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="female" textValue="زن">
                  زن
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="male" textValue="مرد">
                  مرد
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <TextField
            name="email"
            type="email"
            aria-label="ایمیل"
            isRequired
            validate={(value) =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
              "یک ایمیل معتبر وارد کنید."
            }
          >
            <Input placeholder="ایمیل" className={inputClassName} />
            <FieldError />
          </TextField>
          <TextField
            name="password"
            type="password"
            aria-label="رمز عبور"
            isRequired
            validate={(value) =>
              value.length >= 8 || "رمز عبور باید حداقل ۸ کاراکتر باشد."
            }
          >
            <Input placeholder="رمز عبور" className={inputClassName} />
            <FieldError />
          </TextField>
          <Checkbox
            name="accept-rules"
            className="group w-fit"
            isSelected={isSelected}
            onChange={setIsSelected}
            isRequired
          >
            <Checkbox.Control className="border-gray-4 rounded-md border group-data-[selected=true]:border-transparent before:rounded-md">
              <Checkbox.Indicator className="rounded-md" />
            </Checkbox.Control>
            <Checkbox.Content>
              <p className="text-xs">
                با ورود و ثبت نام در سایت، با
                <span className="text-primary"> قوانین بیلیتو </span>
                موافقت میکنم.
              </p>
            </Checkbox.Content>
          </Checkbox>
        </Form>
      </Modal.Body>
      <Modal.Footer className="flex flex-col">
        <Button
          type="submit"
          form="signup-form"
          className="bg-primary rounded-lg font-light"
          fullWidth
        >
          ثبت نام
        </Button>
        <AuthSwitch />
      </Modal.Footer>
    </>
  );
}
