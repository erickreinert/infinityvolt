export default function formataTelefone(phone: string): string {
  const digits = phone.replace(/\D/g, '');

  let formattedPhone = '+55 ';

  if (digits.length <= 2) {
    formattedPhone += `(${digits}`;
  } else if (digits.length <= 6) {
    formattedPhone += `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  } else if (digits.length <= 10) {
    formattedPhone += `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  } else {
    formattedPhone += `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  }
  return formattedPhone;
}
