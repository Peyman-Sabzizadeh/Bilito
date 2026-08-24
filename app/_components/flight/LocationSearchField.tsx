import {
  SearchFieldClearButton,
  SearchField,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldSearchIcon,
} from "@heroui/react";

export default function LocationSearchField() {
  return (
    <SearchField autoFocus name="search" aria-label="Search Field">
      <SearchFieldGroup className="px-2 border-red-600">
        <SearchFieldSearchIcon className="ml-1"/>
        <SearchFieldInput placeholder="جستجوی شهر..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
    </SearchField>
  );
}
