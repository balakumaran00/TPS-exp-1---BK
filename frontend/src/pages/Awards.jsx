export default function Awards() {
    return (
      <div className="container mt-4">
  
        {/* PAGE TITLE */}
        <h3 className="fw-bold mb-3">Awards</h3>
  
        {/* INTRO SECTION */}
        <div
          className="p-3 mb-4"
          style={{ background: "#d7eaf8", borderRadius: "4px" }}
        >
          <p>
            TPS-I Expansion has been consistently recognized for excellence in
            <strong> power generation, operational performance, safety practices,
            environmental stewardship, and employee welfare</strong>.
          </p>
          <p>
            These recognitions highlight the unwavering commitment of the station
            to high-quality and sustainable power generation.
          </p>
        </div>
  
        {/* SAFETY AWARDS */}
        <h5 className="fw-bold text-danger mt-4">Safety Awards</h5>
        <ul className="list-group mb-4">
          <li className="list-group-item">
            Awarded for accident-free operations and implementation of advanced safety protocols.
          </li>
          <li className="list-group-item">
            Recognized for safety awareness programs and workplace monitoring systems.
          </li>
          <li className="list-group-item">
            Appreciation for maintaining the highest safety standards for employees and contractors.
          </li>
        </ul>
  
        {/* ENVIRONMENTAL AWARDS */}
        <h5 className="fw-bold text-danger mt-4">Environmental Excellence Awards</h5>
        <ul className="list-group mb-4">
          <li className="list-group-item">
            Recognized for eco-friendly operations and adherence to environmental regulations.
          </li>
          <li className="list-group-item">
            Awarded for innovations in fly ash utilization and emission control systems.
          </li>
          <li className="list-group-item">
            Honored for sustainable resource management and pollution reduction.
          </li>
        </ul>
  
        {/* PERFORMANCE AWARDS */}
        <h5 className="fw-bold text-danger mt-4">Performance & Operational Awards</h5>
        <ul className="list-group mb-4">
          <li className="list-group-item">
            Achieved high Plant Load Factor (PLF) and excellent operational reliability.
          </li>
          <li className="list-group-item">
            Recognized for efficient fuel usage and optimal power generation practices.
          </li>
          <li className="list-group-item">
            Awarded for minimum forced outages and continuous improvement initiatives.
          </li>
        </ul>
  
        {/* FINAL NOTE */}
        <div
          className="p-3 mb-4"
          style={{ background: "#f0f8ff", borderRadius: "4px" }}
        >
          <p>
            TPS-I Expansion continues its journey toward excellence by upholding
            strong values in safety, environmental care, and efficient power
            generation. These awards reflect the plant’s dedication to delivering
            reliable and sustainable power to the nation.
          </p>
        </div>
  
        {/* ---------------- SLIDESHOW SECTION (AT THE END) ---------------- */}
        <h5 className="fw-bold text-danger mt-4 mb-3">Awards Photo Gallery</h5>
  
        <div
          id="awardsCarousel"
          className="carousel slide mb-4"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#awardsCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#awardsCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#awardsCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>
  
          <div className="carousel-inner rounded shadow-sm">
            <div className="carousel-item active">
              <img
                src="/images/awards/award1.jpg"
                className="d-block w-100"
                alt="Award Slide 1"
              />
            </div>
  
            <div className="carousel-item">
              <img
                src="/images/awards/award2.jpg"
                className="d-block w-100"
                alt="Award Slide 2"
              />
            </div>
  
            <div className="carousel-item">
              <img
                src="/images/awards/award3.jpg"
                className="d-block w-100"
                alt="Award Slide 3"
              />
            </div>
          </div>
  
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#awardsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
  
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#awardsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
  
      </div>
    );
  }
  