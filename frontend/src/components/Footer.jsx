// frontend/src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-primary text-white mt-5">
        <div className="container py-3 text-center small">
          <p className="mb-0">
            TPS I EXPANSION, NLC India Limited – Internal Demo Site
          </p>
          <p className="mb-0">
            Copyright © {new Date().getFullYear()} TPS I Expansion
          </p>
          <p className="mb-0" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            Designed & Developed by           BALAKUMARAN B
          </p>
        </div>
      </footer>
    );
  }
  