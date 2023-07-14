export default function formatPrice(price: number) {
  const formatedPrice = Intl.NumberFormat("fa-IR", {
    style: "currency",
    currency: "IRR",
  }).format(price);
  return formatedPrice;
}
