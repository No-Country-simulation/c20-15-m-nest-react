export function generateCBU(): string {
  return Math.random().toString().slice(2, 22).padEnd(22, '0');
}
