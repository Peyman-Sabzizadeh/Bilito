import Logo from "@/_components/Logo";
import { useAuthModal } from "@/_store/authModalStore";
import { ArrowRight } from "lucide-react";
import { Button, Form, Modal, Spinner } from "@heroui/react";
import AuthSwitch from "./AuthSwitch";
import useSignupSubmit from "@/_hooks/useSignupSubmit";
import { signupFormFields } from "@/_data/signupFormFields";
import SignupFields from "./SignupFields";
import TermsCheckbox from "./TermsCheckbox";

export default function SignupForm() {
  const { onOpenChange } = useAuthModal();
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
          <TermsCheckbox />
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
