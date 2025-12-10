export default function Contacts() {
    return (
      <div className="container mt-4">
  
        {/* PAGE TITLE */}
        <h3 className="fw-bold mb-3">Contact Information</h3>
  
        {/* INTRO BOX */}
        <div
          className="p-3 mb-4"
          style={{ background: "#d7eaf8", borderRadius: "4px" }}
        >
          <p>
            For all enquiries related to TPS–I Expansion operations, administration, 
            safety, and maintenance, please reach out to the department through the 
            official contact channels provided below.
          </p>
          <p>
            You may also refer to the organizational contact chart for detailed 
            department-wise communication routes.
          </p>
        </div>
  
        {/* CONTACT IMAGE */}
        <div className="text-center mb-4">
          <img
            src="/images/contacts/contact-chart.jpg"
            alt="Contact Chart"
            style={{
              width: "100%",
              maxWidth: "700px",
              borderRadius: "6px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
            }}
          />
        </div>
  
        {/* NOTE */}
        <div
          className="p-3"
          style={{ background: "#f0f8ff", borderRadius: "4px" }}
        >
          <p>
            For additional support, please contact the TPS–I Expansion Control Room
            or the Administration Office during working hours.
          </p>
        </div>
  
      </div>
    );
  }
  