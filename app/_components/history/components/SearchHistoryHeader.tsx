import ClearAllButton from "./ClearAllButton";
import SearchHistoryTitle from "./SearchHistoryTitle";

export type SearchHistoryHeaderProps = {
  clearAll: () => void;
  isEmpty: boolean;
};

export default function SearchHistoryHeader({
  clearAll,
  isEmpty,
}: SearchHistoryHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <SearchHistoryTitle />
      <ClearAllButton clearAll={clearAll} isEmpty={isEmpty} />
    </div>
  );
}
