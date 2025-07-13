function CoffeeCard({ name, shortDescription, image, price, origin }) {
  return (
    <div data-aos="zoom-in" className="coffee-card">
      <img
        src={
          image?.startsWith("http")
            ? image
            : `${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${image}`
        }
        alt={name}
        className="coffee-image"
      />
      <div className="coffee-content">
        <h3 className="coffee-title">{name}</h3>
        <p className="coffee-origin">
          {origin?.country}, {origin?.region}
        </p>
        <p className="coffee-description">{shortDescription}</p>
        <p className="coffee-price">${price}</p>
      </div>
    </div>
  );
}
export default CoffeeCard;
