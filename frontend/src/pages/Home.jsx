// frontend/src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "../Home.css"; // keep your CSS file

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

  // ---- Generation search state + helpers ----
  const API_BASE = "http://localhost:5000"; // adjust if your backend port differs

  const [searchDate, setSearchDate] = useState("");
  const [dayReading, setDayReading] = useState(null);
  const [searchMessage, setSearchMessage] = useState("");

  async function handleSearchByDate() {
    if (!searchDate) {
      setSearchMessage("Choose a date first");
      return;
    }
    setSearchMessage("Searching...");
    try {
      const url = `${API_BASE}/api/generation/search?date=${encodeURIComponent(searchDate)}`;
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        const txt = await res.text();
        console.error("search error:", res.status, txt);
        setSearchMessage("Search failed (see console)");
        return;
      }
      const json = await res.json();
      if (!json.found) {
        setDayReading(null);
        setSearchMessage("No readings for selected date.");
      } else {
        setDayReading(json.reading);
        setSearchMessage("Latest reading found.");
      }
    } catch (err) {
      console.error("fetch error:", err);
      setSearchMessage("Error fetching data.");
    }
  }

  // optional: load latest on mount
  useEffect(() => {
    async function loadLatest() {
      try {
        const res = await fetch(`${API_BASE}/api/generation/latest`, { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (json.found) setDayReading(json.reading);
        }
      } catch (err) {
        // ignore
      }
    }
    loadLatest();
  }, []);

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

        {/* ===== DATE SEARCH + REAL TIME / YEAR BLOCK ===== */}
        <div className="mt-4">
          <div className="card p-3 mb-3">
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="searchDate" className="me-2 mb-0">Select date:</label>
              <input
                id="searchDate"
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="form-control"
                style={{ maxWidth: 220 }}
              />
              <button className="btn btn-primary ms-2" onClick={handleSearchByDate}>Search</button>
              <button className="btn btn-outline-secondary ms-2" onClick={() => { setSearchDate(""); setDayReading(null); setSearchMessage(""); }}>Reset</button>
              <div className="ms-auto text-muted">{searchMessage}</div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <div className="card p-3">
                <h5>REAL TIME GENERATION</h5>
                <div className="text-muted">Recorded at: { dayReading ? new Date(dayReading.recorded_at).toLocaleString() : "-" }</div>
                <div className="row mt-3">
                  <div className="col-3"><strong>Unit I</strong><div>{ dayReading ? `${dayReading.unit1_mw} MW` : "- MW" }</div></div>
                  <div className="col-3"><strong>Unit II</strong><div>{ dayReading ? `${dayReading.unit2_mw} MW` : "- MW" }</div></div>
                  <div className="col-3"><strong>Net Gen</strong><div>{ dayReading ? `${dayReading.net_generation} MW` : "- MW" }</div></div>
                  <div className="col-3"><strong>Frequency</strong><div>{ dayReading ? `${dayReading.frequency_hz} Hz` : "- Hz" }</div></div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card p-3">
                <h5>PERFORMANCE FOR YEAR 2025</h5>
                <ul className="list-unstyled mt-2 mb-0">
                  <li><strong>Target (MU)</strong> <span className="float-end">2885.699</span></li>
                  <li><strong>Achieved (MU)</strong> <span className="float-end">1503.04</span></li>
                  <li><strong>Balance (MU)</strong> <span className="float-end">1382.659</span></li>
                  <li><strong>Balance Days</strong> <span className="float-end">22</span></li>
                  <li><strong>Asking Rate (MU)</strong> <span className="float-end">8.452</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SCROLLING MESSAGE ===== */}
        <div className="scrolling-message-container mt-4">
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
            <p style={{ fontFamily: '"Times New Roman", Times, serif' }}>Designed &amp; Developed by BALAKUMARAN B</p>
            <p>Last updated : 10 Dec 2025</p>
          </div>
        </div>

        {/* ===== CONTACT & SOCIAL SECTION ===== */}
        <div className="contact-section mt-4 mb-5 p-4">
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold text-white">NLC India Limited</h4>
              <hr className="contact-divider" />
              <p className="text-white mb-1">Corporate Office,</p>
              <p className="text-white mb-1">Block-1, Neyveli Township,</p>
              <p className="text-white mb-1">Cuddalore District,</p>
              <p className="text-white mb-3">Tamilnadu - 607801.</p>

              <h6 className="fw-bold text-white">Follow Us</h6>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener">
                  <img src="/images/social/facebook.png" className="social-img" />
                </a>
                <a href="https://www.x.com" target="_blank" rel="noopener">
                  <img src="/images/social/x.png" className="social-img" />
                </a>
                <a href="https://www.youtube.com/c/NLCINDIALIMITED" target="_blank" rel="noopener">
                  <img src="/images/social/youtube.png" className="social-img" />
                </a>
                <a href="https://www.instagram.com/_.braxton__/" target="_blank" rel="noopener">
                  <img src="/images/social/instagram.png" className="social-img" />
                </a>
              </div>
            </div>

            <div className="col-md-6 text-white right-links">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="https://www.nlcindia.in" className="right-link">NLCIL Official Website</a></li>
                <li><a href="https://www.coal.nic.in" className="right-link">Ministry of Coal</a></li>
                <li><a href="https://www.india.gov.in" className="right-link">National Portal of India</a></li>
                <li><a href="https://www.makeinindia.com" className="right-link">Make in India</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
