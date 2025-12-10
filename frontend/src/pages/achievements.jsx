export default function achievements() {
    return (
      <div className="container mt-4">
  
        {/* PAGE TITLE */}
        <h3 className="fw-bold mb-3">Achievements</h3>
  
        {/* INTRO BOX */}
        <div
          className="p-3 mb-4"
          style={{ background: "#d7eaf8", borderRadius: "4px" }}
        >
          <p>
            TPS–I Expansion has accomplished several significant milestones in operational
            performance, safety excellence, environmental compliance, and plant reliability.
          </p>
          <p>
            These achievements reflect the commitment and teamwork of employees and affirm
            the station's dedication to delivering sustainable and reliable power.
          </p>
        </div>
  
        {/* ----------- 10 IMAGE GRID ----------- */}
        <div className="row">
  
          {[1,2,3,4,5,6,7,8,9].map(num => (
            <div className="col-md-4 mb-4" key={num}>
              <div className="card shadow-sm">
                <img
                  src={`/images/achievements/achievement-${num}.jpg`}
                  className="card-img-top"
                  alt={`Achievement ${num}`}
                  style={{ borderRadius: "4px" }}
                />
              </div>
            </div>
          ))}
  
        </div>
  
        {/* NOTE BOX */}
        <div
          className="p-3 mt-3"
          style={{ background: "#f0f8ff", borderRadius: "4px" }}
        >
          <p>
            TPS–I Expansion continues to strive for excellence and remains committed to 
            enhancing operational efficiency while maintaining high standards of safety 
            and environmental stewardship.
          </p>
        </div>
  
      </div>
    );
  }
  