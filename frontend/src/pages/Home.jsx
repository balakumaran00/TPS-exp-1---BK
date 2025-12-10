// frontend/src/pages/Home.jsx
import "../Home.css"; // <-- make sure to create Home.css or move CSS to App.css


export default function Home() {

  // ===== TAB SWITCHING FUNCTION =====
  function handleTabClick(e) {
    const target = e.target.getAttribute("data-target");

    // Remove active from all tabs
    document.querySelectorAll(".vmv-tab").forEach(tab => tab.classList.remove("active"));

    // Remove active from all panels
    document.querySelectorAll(".vmv-panel").forEach(panel => panel.classList.remove("active"));

    // Add active class to clicked tab & its panel
    e.target.classList.add("active");
    document.getElementById(target).classList.add("active");
  }

  return (
    <>
<div className="video-hero">
  <video className="hero-video" autoPlay muted loop playsInline>
    <source src="/videos/tps-expansion.mp4" type="video/mp4" />
  </video>
</div>



      <div className="container mt-4">

      {/* Page Title */}
      <div className="text-center tps-header-title mb-4">
        <h2 className="fw-bold">THERMAL POWER STATION I EXPANSION</h2>
        <h5 className="text-secondary">NLC INDIA LIMITED</h5>
      </div>

      {/* ----------- LEFT CAROUSEL + RIGHT TEXT ----------- */}
      <div className="row align-items-center mb-4">

        {/* LEFT SIDE SMALL CAROUSEL */}
        <div className="col-md-4">
          <div className="card shadow-sm">

            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 img-fluid" src="/images/slide1.jpg" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid" src="/images/slide2.jpg" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid" src="/images/slide3.jpg" alt="Slide 3" />
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>

          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="col-md-8">
          <div className="card shadow-sm p-3">
            <p>
              TPS 1 Expansion is the 3rd power generating station of NLCIL with an installed
              capacity of 420 MWs (2 × 210 MW). This project was envisaged for meeting the
              growing power demand of the southern region. The objective of this plant is to
              produce cheaper power with optimum utilization of resources in an environment
              friendly manner.
            </p>

            <p>
              The boiler and turbo-generator of both units were supplied and erected by
              M/s Ansaldo Energia of Italy. The project was started during 1998-99. The first
              unit was commissioned on 21.10.2002 and the second unit on 22.7.2003.
              The total cost of the project is Rs.1420.27 Crores.
            </p>

            <p>
              The plant received ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 certifications
              for Quality, Environment, and Occupational Health & Safety Management.
            </p>
          </div>
        </div>
      </div>

      {/* ===== VISION / MISSION / VALUES / Q&E TABS ===== */}
      <section className="vmv-container mt-4">

        <div className="vmv-tabs">
          <button className="vmv-tab active" data-target="vision" onClick={handleTabClick}>
            Vision
          </button>
          <button className="vmv-tab" data-target="mission" onClick={handleTabClick}>
            Mission
          </button>
          <button className="vmv-tab" data-target="values" onClick={handleTabClick}>
            Values
          </button>
          <button className="vmv-tab" data-target="qe" onClick={handleTabClick}>
            Q&amp;E
          </button>
        </div>

        {/* VISION */}
        <div id="vision" className="vmv-panel active">
          To emerge as a leading Mining and Power Company with social responsiveness accelerating Nation's growth.
        </div>

        {/* MISSION */}
        <div id="mission" className="vmv-panel">
          <ul>
            <li>Develop and sustain expertise in Power and Mining with focus on growth and financial strength.</li>
            <li>Be socially responsive and achieve sustainable development.</li>
            <li>Strive to achieve excellence in processes and practices.</li>
            <li>Nurture talent, encourage innovation and foster collaborative culture.</li>
          </ul>
        </div>

        {/* VALUES */}
        <div id="values" className="vmv-panel">
          <p>
            N — National Orientation<br />
            L — Learning, Development and Resilience<br />
            C — Commitment to Excellence<br />
            I — Innovation and Creativity<br />
            L — Leadership and Loyalty<br />
            C — Customer Focus<br />
            O — Organizational Pride and Growing Together<br />
            M — Mutual Trust and Team Work<br />
            M — Motivation<br />
            I — Integrity, Accountability and Transparency<br />
            T — Total Quality and Total Wellness<br />
            S — Safety and Sustainability
          </p>
        </div>

        {/* Q&E */}
        <div id="qe" className="vmv-panel">
          <ul>
            <li>* NLC TPS affirms commitment to produce power with customer satisfaction and pollution prevention.</li>
            <li>* Set and review Quality & Environmental objectives.</li>
            <li>* Supply quality power as per committed schedules.</li>
            <li>* Incorporate Quality assurance in all activities.</li>
            <li>* Optimize resources (water, fuel, auxiliary power).</li>
            <li>* Comply with all environmental legal requirements.</li>
            <li>* Reduce pollution through continuous improvement.</li>
            <li>* Enhance awareness among employees & contractors.</li>
            <li>* Promote innovative ideas and set benchmarks.</li>
          </ul>
        </div>

      </section>
      {/* ===== SCROLLING MESSAGE ===== */}
<div className="scrolling-message-container">
  <div className="scrolling-message">
    Welcome to TPS-I Expansion — Dedicated to Excellence in Power Generation, Safety, and Environmental Stewardship.
  </div>
</div>

{/* ===== LOGO STRIP SECTION (BOTTOM) ===== */}
<div className="logo-strip mt-4 mb-5">

  <div className="logo-row d-flex flex-wrap justify-content-center align-items-center">

    <img src="/images/logos/india-gov.png" alt="India Gov" className="footer-logo" />
    <img src="/images/logos/ministry-coal.png" alt="Ministry of Coal" className="footer-logo" />
    <img src="/images/logos/coop.png" alt="International Year of Cooperatives" className="footer-logo" />

  </div>

  <div className="text-center text-white mt-3">
    <p  style={{ fontFamily: '"Times New Roman", Times, serif' }}>Designed & Developed by    BALAKUMARAN B</p>
    <p>Last updated : 10 Dec 2025</p>
  </div>

</div>
{/* ===== CONTACT & SOCIAL SECTION ===== */}
<div className="contact-section mt-4 mb-5 p-4">

  <h4 className="fw-bold text-white">NLC India Limited</h4>

  <hr className="contact-divider" />

  <p className="text-white mb-1">Corporate Office,</p>
  <p className="text-white mb-1">Block-1, Neyveli Township,</p>
  <p className="text-white mb-1">Cuddalore District,</p>
  <p className="text-white mb-3">Tamilnadu - 607801.</p>

  <h6 className="fw-bold text-white">Follow Us</h6>

  <div className="social-icons">

<a href="https://www.facebook.com" target="_blank" rel="noopener" title="Facebook">
  <img src="/images/social/facebook.png" alt="Facebook Icon" className="social-img" />
</a>

<a href="https://www.x.com" target="_blank" rel="noopener" title="X (Twitter)">
  <img src="/images/social/x.png" alt="X Icon" className="social-img" />
</a>

<a href="https://www.instagram.com" target="_blank" rel="noopener" title="Instagram">
  <img src="/images/social/instagram.png" alt="Instagram Icon" className="social-img" />
</a>




<a href="https://www.youtube.com/c/NLCINDIALIMITED" target="_blank" rel="noopener" title="YouTube">
  <img src="/images/social/youtube.png" alt="YouTube Icon" className="social-img" />
</a>

</div>




</div>



    </div>
    </>
  );
}

