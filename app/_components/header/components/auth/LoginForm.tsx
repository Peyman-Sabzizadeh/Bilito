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
  Modal,
  Spinner,
  TextField,
} from "@heroui/react";
import AuthSwitch from "./AuthSwitch";
import useLoginSubmit from "@/_hooks/useLoginSubmit";

const inputClassName =
  "placeholder:text-gray-8 border-gray-3 focus:ring-primary rounded-lg border text-sm shadow-none focus:ring-1";

export default function LoginForm() {
  const { onOpenChange } = useAuthModal();
  const [isSelected, setIsSelected] = useState(false);
  const { handleLoginSubmit, isLoading } = useLoginSubmit();
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
          ورود به حساب کاربری
        </Modal.Heading>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="login-form"
          className="flex flex-col gap-6 pt-15 md:pt-8"
          onSubmit={handleLoginSubmit}
        >
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
            validate={(value) =>
              value.length >= 8 || "رمز عبور باید حداقل ۸ کاراکتر باشد."
            }
          >
            <Input placeholder="رمز عبور" className={inputClassName} />
            <FieldError />
          </TextField>
          <Checkbox
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
          form="login-form"
          className="bg-primary rounded-lg font-light"
          fullWidth
          isPending={isLoading}
        >
          {isLoading ? <Spinner size="sm" color="current" /> : "ورود"}
        </Button>
        <AuthSwitch />
      </Modal.Footer>
    </>
  );
}
