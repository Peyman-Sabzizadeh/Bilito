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
  TextField,
} from "@heroui/react";

export default function LoginForm() {
  const { onOpenChange } = useAuthModal();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Modal.Container size="full">
      <Modal.Dialog>
        <Modal.Header>
          <Logo className="m-auto w-fit" />
          <ArrowRight
            className="text-gray-7 size-7 cursor-pointer"
            strokeWidth={1.5}
            onClick={() => onOpenChange(false)}
          />
          <Modal.Heading className="text-gray-8 text-center text-xl font-bold">
            ورود به بیلیتو
          </Modal.Heading>
        </Modal.Header>
        <Modal.Body>
          <Form id="login-form" className="flex flex-col gap-6 pt-15">
            <TextField
              name="email"
              type="email"
              aria-label="ایمیل"
              autoFocus
              isRequired
              validate={(value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
                "یک ایمیل معتبر وارد کنید."
              }
            >
              <Input
                placeholder="ایمیل"
                className="placeholder:text-gray-8 border-gray-3 focus:ring-primary rounded-lg border text-sm shadow-none focus:ring-1"
              />
              <FieldError />
            </TextField>
            <TextField
              name="password"
              type="password"
              aria-label="رمز عبور"
              validate={(value) =>
                value.length > 0 || "رمز عبور خود را وارد کنید."
              }
            >
              <Input
                placeholder="رمز عبور"
                className="placeholder:text-gray-8 border-gray-3 focus:ring-primary rounded-lg border text-sm shadow-none focus:ring-1"
              />
              <FieldError />
            </TextField>
            <Checkbox
              name="accept-rules"
              className="group"
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
        <Modal.Footer>
          <Button
            type="submit"
            form="login-form"
            className="bg-primary rounded-lg font-light"
            fullWidth
          >
            ورود
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal.Container>
  );
}
