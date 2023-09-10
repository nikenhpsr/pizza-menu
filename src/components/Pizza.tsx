import { pizzaData } from "../App";

export default function Pizza() {
  const pizzaItems = pizzaData.map((pizza) => {
    const isSoldOut = () => {
      if (pizza.soldOut === true) {
        return <p>Sold Out</p>;
      }
      return <p>Currently Available</p>;
    };
    return (
      <div key={pizza.name}>
        <h2>{pizza.name}</h2>
        <img src={pizza.photoName} alt={pizza.name} />
        <p>{pizza.ingredients}</p>
        <p>€{pizza.price}</p>
        <p>{isSoldOut()}</p>
      </div>
    );
  });

  return (
    <>
      <div>{pizzaItems}</div>
    </>
  );
}
