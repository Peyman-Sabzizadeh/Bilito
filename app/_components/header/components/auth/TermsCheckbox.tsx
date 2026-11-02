import { useState } from "react";
import { Checkbox } from "@heroui/react";
import Link from "next/link";

export default function TermsCheckbox() {
  const [isSelected, setIsSelected] = useState(false);

  return (
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
          <Link
            href="/terms"
            target="_blank"
            onClick={(event) => event.stopPropagation()}
            className="text-primary"
          >
            {" "}
            قوانین بیلیتو{" "}
          </Link>
          موافقت میکنم.
        </p>
      </Checkbox.Content>
    </Checkbox>
  );
}
