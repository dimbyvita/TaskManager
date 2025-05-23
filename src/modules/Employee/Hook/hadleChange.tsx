export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  values: any,
  setValues: (val: any) => void,
  setImage?: (file: File) => void
) => {
  const { name, value, files } = e.target as HTMLInputElement;

  if (name === 'imageFile' && files && setImage) {
    setImage(files[0]);
  } else {
    setValues({ ...values, [name]: value });
  }
};
