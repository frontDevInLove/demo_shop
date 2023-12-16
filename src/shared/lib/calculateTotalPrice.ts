export function calculateTotalPrice(
  price: string = "00.00₽",
  quantity: number = 1,
): string {
  const numericPrice = Number(price.replace(/[^\d.]/g, ""));
  const totalCents = numericPrice * quantity * 100;
  const rubles = Math.floor(totalCents / 100);
  const cents = totalCents % 100;
  return `${rubles}.${cents < 10 ? "0" : ""}${cents}₽`;
}
