export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour < closeHour;

  if (isOpen === true) {
    return <footer>We're Open!</footer>;
  } else {
    return <footer>Sorry, We're Closed</footer>;
  }
}
