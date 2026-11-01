import Logo from "@/_components/Logo";
import { useState } from "react";
import { useAuthModal } from "@/_store/authModalStore";
import { ArrowRight } from "lucide-react";
import { Button, Checkbox, Form, Modal, Spinner } from "@heroui/react";
import AuthSwitch from "./AuthSwitch";
import useSignupSubmit from "@/_hooks/useSignupSubmit";
import { signupFormFields } from "@/_data/signupFormFields";
import SignupFields from "./SignupFields";

export default function SignupForm() {
  const { onOpenChange } = useAuthModal();
  const [isSelected, setIsSelected] = useState(false);
  const { handleSignupSubmit, isLoading } = useSignupSubmit();
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
        <Form
          id="signup-form"
          className="flex flex-col gap-6 pt-15 md:pt-8"
          onSubmit={handleSignupSubmit}
        >
          {signupFormFields.map((field) => (
            <SignupFields key={field.name} field={field} />
          ))}
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
          form="signup-form"
          className="bg-primary rounded-lg font-light"
          fullWidth
          isPending={isLoading}
        >
          {isLoading ? <Spinner size="sm" color="current" /> : "ثبت نام"}
        </Button>
        <AuthSwitch />
      </Modal.Footer>
    </>
  );
}
