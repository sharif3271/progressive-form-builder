


export const selectFile = (
  onSelect: (f: File) => void,
) => {
  const input = document.createElement('input') as HTMLInputElement;
  input.setAttribute('type', 'file')
  // input.setAttribute('accept', 'image/*')
  input.click()
  input.onchange = () => {
    const file = input?.files?.[0];
    if (file) {
      onSelect(file)
    }
  };
}