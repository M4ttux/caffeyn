function Coffee({
  name,
  description,
  price,
  roastLevel,
  flavorNote,
  image,
  origin,
}) {
  return (
    <div className="row justify-content-center align-items-center">
      <div data-aos="fade-right" className="pe-5 ps-5 col-lg-6 col-12">
        <img
          src={
            image?.startsWith("http")
              ? image
              : `${import.meta.env.VITE_API_URL.replace("/api", "")}/uploads/${image}`
          }
          className="img-fluid d-block m-auto"
          alt={name}
        />
      </div>
      <div data-aos="fade-left" className="pe-5 ps-5 col-lg-6 col-12">
        <h2 className="ps-md-5 ps-me-5 ps-lg-0 pe-lg-0 mb-3 pt-5 pt-lg-0 card-title">
          {name}
        </h2>
        <p className="ps-md-5 ps-me-5 ps-lg-0 pe-lg-0 price card-text">
          ${price}
        </p>
        <p className="ps-md-5 ps-me-5 ps-lg-0 pe-lg-0 card-text">
          {description}
        </p>
        <p className="ps-md-5 ps-me-5 ps-lg-0 pe-lg-0 card-text">
          <strong>Nivel de tostado:</strong> {roastLevel}
        </p>
        <p className="ps-md-5 ps-me-5 ps-lg-0 pe-lg-0 card-text">
          <strong>Nota de sabor:</strong> {flavorNote}
        </p>
        {origin && (
          <p className="ps-md-5 ps-me-5 ps-lg-0 pe-lg-0 card-text">
            <strong>Origen:</strong> {origin.country}, {origin.region}
          </p>
        )}

        <div className="row botones-detalles align-items-center justify-content-center align-items-lg-start justify-content-lg-start mt-4">
          <div className="col-lg-6 col-md-12 div-comprar">
            <a
              href="/buyed"
              className="d-block m-auto btn btn-comprar-ahora mt-3 mt-lg-0"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Coffee;
