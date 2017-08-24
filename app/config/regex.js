export const phone = (str) => {
  return /(13\d|14[57]|15[^4,\D]|17[13678]|18\d)\d{8}|170[0589]\d{7}/.test(str);
}