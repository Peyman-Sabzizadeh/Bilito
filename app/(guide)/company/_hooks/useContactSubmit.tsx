export default function useContactSubmit() {
  const handleContactSubmit = (
    event: React.SyntheticEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    // send to API when backend is ready
  };
  return { handleContactSubmit };
}
