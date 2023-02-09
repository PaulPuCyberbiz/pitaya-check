export const getDataUrl = (file: File | null) => {
  return new Promise<string>((resolve, reject) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = e => {
        if (e && e.target && e.target.result) {
          resolve(e.target.result as string);
        } else {
          reject();
        }
      };

      reader.readAsDataURL(file);
    } else {
      reject();
    }
  });
};
export default getDataUrl;
