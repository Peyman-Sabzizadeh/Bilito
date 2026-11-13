"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Spinner,
  TextField,
} from "@heroui/react";
import { Plus } from "lucide-react";
import useWalletSubmit from "../_hooks/useWalletSubmit";

export default function WalletIncreaseForm() {
  const { handleWalletSubmit, isLoading } = useWalletSubmit();
  return (
    <Form onSubmit={handleWalletSubmit} className="flex w-full flex-col gap-4">
      <label className="text-gray-7 md:text-gray-9 self-start max-md:text-sm md:font-semibold">
        افزایش موجودی
      </label>
      <div className="flex gap-12 max-md:flex-col md:justify-between md:gap-8">
        <TextField
          isDisabled={isLoading}
          className="md:flex-3"
          name="amount"
          type="text"
          inputMode="numeric"
          aria-label="مبلغ افزایش موجودی"
          isRequired
          maxLength={9}
          validate={(value) => {
            if (!value.trim()) return "لطفا مبلغ را وارد کنید.";
            if (!/^[1-9]\d*$/.test(value))
              return "لطفاً یک عدد معتبر وارد کنید.";
            if (Number(value) < 10_000) return "حداقل مبلغ 10,000 تومان است.";
            if (Number(value) > 200_000_000)
              return "حداکثر مبلغ 200,000,000 تومان است.";
            return true;
          }}
        >
          <Input
            placeholder="مبلغ به تومان وارد شود"
            className="placeholder:text-gray-8 text-gray-8 border-gray-3 focus:ring-primary h-12 rounded-lg border text-sm shadow-none focus:ring-1"
          />
          <FieldError />
        </TextField>
        <Button
          type="submit"
          isPending={isLoading}
          className="bg-primary hover:bg-shade-2 h-12 w-full rounded-lg font-normal md:flex-1"
        >
          {isLoading ? (
            <Spinner size="sm" color="current" />
          ) : (
            <>
              <Plus strokeWidth={1.5} className="size-5" />
              افزایش اعتبار
            </>
          )}
        </Button>
      </div>
    </Form>
  );
}
