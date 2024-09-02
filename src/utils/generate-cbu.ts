export function generateCBU(): string {
  let cbu = '';
  while (cbu.length < 22) {
    cbu += Math.floor(Math.random() * 10).toString();
  }
  return cbu;
}
