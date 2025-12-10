export default function Photos() {
    return (
      <div className="container mt-4">
  
        {/* PAGE TITLE */}
        <h3 className="fw-bold mb-3">Photo Gallery</h3>
  
        {/* INTRO SECTION */}
        <div
          className="p-3 mb-4"
          style={{ background: "#d7eaf8", borderRadius: "4px" }}
        >
          <p>
            This gallery showcases important events, achievements, plant activities,
            and memorable moments from TPS–I Expansion.
          </p>
          <p>
            All images represent the dedication and teamwork of the employees who
            contribute to the successful operation of the station.
          </p>
        </div>
  
        {/* ---------------- PHOTO GRID ---------------- */}
        <div className="row">
  
          {/* ---- PHOTO 1 ---- */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/gallery/photo1.jpg"
                className="card-img-top"
                alt="Gallery Photo 1"
              />
            </div>
          </div>
  
          {/* ---- PHOTO 2 ---- */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/gallery/photo2.jpg"
                className="card-img-top"
                alt="Gallery Photo 2"
              />
            </div>
          </div>
  
          {/* ---- PHOTO 3 ---- */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/gallery/photo3.jpg"
                className="card-img-top"
                alt="Gallery Photo 3"
              />
            </div>
          </div>
  
          {/* ---- PHOTO 4 ---- */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/gallery/photo4.jpg"
                className="card-img-top"
                alt="Gallery Photo 4"
              />
            </div>
          </div>
  
          {/* ---- PHOTO 5 ---- */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/gallery/photo5.jpg"
                className="card-img-top"
                alt="Gallery Photo 5"
              />
            </div>
          </div>
  
          {/* ---- PHOTO 6 ---- */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/gallery/photo6.jpg"
                className="card-img-top"
                alt="Gallery Photo 6"
              />
            </div>
          </div>
        </div>
  
        {/* ---------------- OPTIONAL SLIDESHOW ---------------- */}
        <h5 className="fw-bold text-danger mt-4 mb-3">Highlights Slideshow</h5>
  
        <div
          id="photoCarousel"
          className="carousel slide mb-4"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#photoCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#photoCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#photoCarousel"
              data-bs-slide-to="2"
            ></button>
          </div>
  
          <div className="carousel-inner rounded shadow-sm">
            <div className="carousel-item active">
              <img
                src="/images/gallery/slide1.jpg"
                className="d-block w-100"
                alt="Slide 1"
              />
            </div>
  
            <div className="carousel-item">
              <img
                src="/images/gallery/slide2.jpg"
                className="d-block w-100"
                alt="Slide 2"
              />
            </div>
  
            <div className="carousel-item">
              <img
                src="/images/gallery/slide3.jpg"
                className="d-block w-100"
                alt="Slide 3"
              />
            </div>
          </div>
  
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#photoCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
  
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#photoCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    );
  }
  