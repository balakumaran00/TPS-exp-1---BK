export default function SalientFeatures() {
    return (
      <div className="container mt-4">

<img
  src="/images/salient-banner.jpg"
  alt="Salient Features Banner"
  className="img-fluid mb-4 rounded shadow-sm"
/>

  
        <h3 className="fw-bold mb-3">Salient Features</h3>
  
        {/* ------- INTRO BOX ------- */}
        <div className="p-3 mb-4" style={{ background: "#d7eaf8", borderRadius: "4px" }}>
          <p>
            TPS-I Expansion is the 3rd power generating station of NLC with an installed
            capacity of <strong>420 MW (2 × 210 MW)</strong>.  
            This project was envisaged to meet the growing power demand of the southern region.
            The objective is to produce cheaper power with optimum utilization of resources in an
            environmentally friendly manner.
          </p>
          <p>
            The boiler and turbo-generator of both units were supplied and erected by
            <strong> M/s Ansaldo Energia of Italy</strong>.  
            The project was started during 1998-99.  
            The first unit was commissioned on <strong>21.10.2002</strong> and the second unit on
            <strong> 22.07.2003</strong>.
          </p>
          <p>
            The total project cost is <strong>Rs. 1420.27 Crores</strong>.
          </p>
          <p>
            The plant achieved ISO certifications:  
            <strong>ISO 9001:2000</strong> (Quality) and <strong>ISO 14001:1996</strong> (Environment).
          </p>
        </div>
  
        {/* ------- TECHNICAL FEATURES TABLE ------- */}
        <h5 className="fw-bold text-danger mt-3">Technical Features</h5>
  
        <table className="table table-bordered mt-2" style={{ fontSize: "14px" }}>
          <tbody>
            <tr>
              <th>#</th>
              <th>Technical Feature</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>1</td>
              <td>CAPACITY</td>
              <td>2 × 210 MW</td>
            </tr>
            <tr>
              <td>2</td>
              <td>DATE OF GOVT. APPROVAL</td>
              <td>12.02.1996</td>
            </tr>
            <tr>
              <td>3</td>
              <td>LIGNITE REQUIREMENT</td>
              <td>2.94 MILLION TONNES PER ANNUM</td>
            </tr>
            <tr>
              <td>4</td>
              <td>LIGNITE SOURCE</td>
              <td>MINE-I EXPANSION (4 MT / ANNUM)</td>
            </tr>
            <tr>
              <td>5</td>
              <td>LAND AREA</td>
              <td>40 HECTARES</td>
            </tr>
            <tr>
              <td>6</td>
              <td>WATER REQUIREMENTS</td>
              <td>2560 M³ / Hr</td>
            </tr>
            <tr>
              <td>7</td>
              <td>EVACUATION OF POWER</td>
              <td>THROUGH 400 KV LINES</td>
            </tr>
            <tr>
              <td>8</td>
              <td>DATE OF COMMERCIAL OPERATION</td>
              <td>
                UNIT I – 21.10.2002 / 9.5.2003  
                UNIT II – 22.7.2003 / 5.9.2003
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>PROJECT COST</td>
              <td>1468.57 CRORE</td>
            </tr>
          </tbody>
        </table>
  
        {/* ------- SPECIAL FEATURES ------- */}
        <h5 className="fw-bold text-danger mt-4">Special Features</h5>
  
        <ul className="list-group mb-4">
          <li className="list-group-item">Fully automated plant controlled by DDCMIS</li>
          <li className="list-group-item">
            Most modern fly ash collection systems for 100% utilization of fly ash for cement and other industries
          </li>
          <li className="list-group-item">
            Cold Gas Re-Circulation system to prevent slag formation in the boiler furnace
          </li>
          <li className="list-group-item">
            Additional Air Flow system to ensure low NOx level in the exit flue gas
          </li>
          <li className="list-group-item">
            Provision of CCTV cameras in the furnace for online monitoring of the flame
          </li>
          <li className="list-group-item">Non-Explosive type Submerged Scrapper Conveyors</li>
          <li className="list-group-item">
            Electronic Governing system for turbines to ensure perfect control over speed
          </li>
        </ul>
  
        {/* ------- ACHIEVEMENTS ------- */}
        <h5 className="fw-bold text-danger">Achievements</h5>
  
        <ul className="list-group">
          <li className="list-group-item">
            Completion of shell concreting for Cooling Tower No-1 (height 114.2m) in a record 285 days from start.
          </li>
          <li className="list-group-item">
            Completion of RCC shell for Bi-Flue Chimney (214m height) in a record 63 working days.
          </li>
          <li className="list-group-item">
            Record Plant Load Factor of 88.01% achieved during first year of operation (2004-05).
          </li>
        </ul>
  
      </div>
    );
  }
  