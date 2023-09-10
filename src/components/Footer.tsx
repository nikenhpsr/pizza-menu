export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour < closeHour;

  if (isOpen === true) {
    return (
      <footer>
        <p>We're Open!</p>
        <p className="copyright">
          {" "}
          &copy; {new Date().getFullYear()} Niken Hapsari
        </p>
      </footer>
    );
  } else {
    return (
      <footer>
        <p>Sorry, We're Closed</p>
        <p className="copyright">
          {" "}
          &copy; {new Date().getFullYear()} Niken Hapsari
        </p>
      </footer>
    );
  }
}
