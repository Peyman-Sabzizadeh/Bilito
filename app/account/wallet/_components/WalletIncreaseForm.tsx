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
import { useState } from "react";

export default function WalletIncreaseForm() {
  const [amount, setAmount] = useState("");
  const { handleWalletSubmit, isLoading } = useWalletSubmit(setAmount);
  const formatAmount = (value: string) =>
    value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
          maxLength={15}
          validate={(value) => {
            if (!value.trim()) return "لطفا مبلغ را وارد کنید.";
            const amount = Number(value.replaceAll(",", ""));
            if (!/^\d+$/.test(value.replaceAll(",", "")))
              return "لطفاً یک عدد معتبر وارد کنید.";
            if (amount < 10_000) return "حداقل مبلغ 10,000 تومان است.";
            if (amount > 200_000_000)
              return "حداکثر مبلغ 200,000,000 تومان است.";

            return true;
          }}
        >
          <Input
            placeholder="مبلغ به تومان وارد شود"
            className="placeholder:text-gray-6 text-gray-8 border-gray-3 focus:ring-primary h-12 rounded-lg border text-sm shadow-none focus:ring-1"
            value={amount}
            onChange={(e) => setAmount(formatAmount(e.target.value))}
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
