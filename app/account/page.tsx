import UserProfileSummary from "./_components/UserProfileSummary";
import UserProfileCard from "./_components/UserProfileCard";

export default function AccountPage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <UserProfileSummary className="md:hidden" />
      <UserProfileCard />
    </div>
  );
}
