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
      <SearchFieldGroup>
        <SearchFieldSearchIcon />
        <SearchFieldInput placeholder="جستجوی شهر..." />
        <SearchFieldClearButton />
      </SearchFieldGroup>
    </SearchField>
  );
}
