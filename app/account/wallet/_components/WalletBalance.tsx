import { Wallet } from "lucide-react";

export default function WalletBalance() {
  return (
    <>
      <div className="text-gray-8 md:text-gray-9 flex items-center gap-2 font-semibold">
        <Wallet strokeWidth={1.5} className="max-md:hidden" />
        <span>موجودی حساب کاربری</span>
      </div>
      <div className="flex w-full gap-2 font-semibold max-md:items-center max-md:justify-between max-md:text-sm md:flex-col">
        <span className="text-gray-6">موجودی کیف پول شما</span>
        <span className="text-gray-9">0 تومان</span>
        {/* We'll add the balance soon... */}
      </div>
    </>
  );
}
