import WalletBalance from "./_components/WalletBalance";
import WalletIncreaseForm from "./_components/WalletIncreaseForm";

export default function WalletPage() {
  return (
    <div className="md:border-gray-4 flex flex-col gap-6 max-md:items-center md:rounded-lg md:border md:p-6">
      <WalletBalance />
      <WalletIncreaseForm />
    </div>
  );
}
