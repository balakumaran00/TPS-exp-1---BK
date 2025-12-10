// frontend/src/pages/GenericPage.jsx
import { useParams } from "react-router-dom";

// All page content stored here (frontend only)
const pages = {
  "about-salient-features": {
    title: "Salient Features",
    body: `
      TPS-I Expansion consists of 2 × 210 MW units.
      It is known for efficient power generation and environmental compliance.
    `
  },

  "about-awards": {
    title: "Awards",
    body: `

  TPS–I Expansion has been consistently recognized for its outstanding achievements in
  power generation, operational excellence, safety management, environmental protection,
  and employee welfare. These recognitions reflect the commitment of the station to
  deliver high performance while maintaining high standards of safety and sustainability.



  The station has received notable safety awards for maintaining accident–free operations,
  implementing effective safety protocols, and ensuring continuous improvement in workplace
  safety practices. These awards acknowledge the dedicated efforts taken to create a safe
  working environment for employees and contract personnel.


  TPS–I Expansion has also earned environmental excellence awards for adopting eco-friendly
  operational practices, efficient emission control measures, and achieving high standards
  in environmental compliance. The station has demonstrated sustainable resource
  utilization and has implemented several initiatives that reduce environmental impact.



  In the area of plant performance, TPS–I Expansion has been honored with awards for itshigh Plant Load Factor (PLF), reliability in power generation, and efficient utilization
  of fuel and auxiliary power. These awards highlight the station’s ability to consistently
  deliver dependable power to the grid.



  These recognitions collectively reflect the commitment of TPS–I Expansion to excellencein every aspect of operation and reinforce its role as a leading thermal power generating
  station known for reliability, safety, and environmental responsibility.


    `
  },

  "about-achievements": {
    title: "Achievements",
    body: `
      The plant has consistently achieved high PLF and energy efficiency benchmarks.
    `
  },

  "about-milestone-activities": {
    title: "Milestone Activities",
    body: `
      Key milestones include commissioning in 2002 & 2003 and achieving ISO certifications.
    `
  },

  "about-roll-of-honour": {
    title: "Roll of Honour",
    body: `
      Honors bestowed upon outstanding employees and teams of TPS-I Expansion.
    `
  },

  "about-safety": {
    title: "Safety",
    body: `
      Safety protocols, monitoring systems, and compliance measures implemented at TPS-I EXP.
    `
  },

  // Add more dropdown pages here exactly like above
};

export default function GenericPage() {
  const { section, page } = useParams();
  const key = `${section}-${page}`;

  const content = pages[key];

  if (!content) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          No content found for <b>{key}</b>.  
          Add it in <code>pages</code> object inside GenericPage.jsx.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="fw-bold mb-3">{content.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{content.body}</p>
        </div>
      </div>
    </div>
  );
}
