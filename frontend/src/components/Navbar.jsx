import { Link } from "react-router-dom";
import "./Navbar.css";

const menu = [
  {
    label: "About Us",
    baseSlug: "about",
    items: [
      { label: "Salient Features", slug: "salient-features" },
      { label: "Awards", slug: "awards" },
      { label: "Achievements", slug: "achievements" },
      { label: "Milestone Activities", slug: "milestone-activities" },
      { label: "Roll of Honour", slug: "roll-of-honour" },
      { label: "Safety", slug: "safety" }
    ]
  },
  {
    label: "SAP",
    baseSlug: "sap",
    items: [
      { label: "ERP", slug: "erp" },
      { label: "PDF Training Manual", slug: "pdf-training-manual" },
      { label: "SAP Password Reset", slug: "sap-password-reset" },
      { label: "ERP Help Desk", slug: "erp-help-desk" }
    ]
  },
  {
    label: "Reports",
    baseSlug: "reports",
    items: [
      { label: "DPR", slug: "dpr" },
      { label: "Shift Report", slug: "shift-report" },
      { label: "Trip Report", slug: "trip-report" }
    ]
  },
  {
    label: "Safety Permit",
    baseSlug: "safety-permit",
    items: [
      { label: "Power House", slug: "power-house" },
      { label: "LHS", slug: "lhs" },
      { label: "AHS", slug: "ahs" },
      { label: "DM Plant", slug: "dm-plant" },
      { label: "Defects Register", slug: "defects-register" },
      { label: "Safety Checklist", slug: "safety-checklist" }
    ]
  },
  {
    label: "ABT",
    baseSlug: "abt",
    items: [
      { label: "NLCIL Power", slug: "nlcil-power" },
      { label: "Real Time Main Plant", slug: "rt-main-plant" },
      { label: "Real Time LHS Parameters", slug: "rt-lhs" },
      { label: "Real Time Borewell Parameters", slug: "rt-borewell" },
      { label: "NLDC-DSM-ACP", slug: "nldc-dsm-acp" },
      { label: "SRLDC", slug: "srldc" },
      { label: "Trading", slug: "trading" }
    ]
  },
  {
    label: "OCMS",
    baseSlug: "ocms",
    items: [
      { label: "Operations", slug: "operations" },
      { label: "Maintenances", slug: "maintenances" },
      { label: "Performance", slug: "performance" }
    ]
  },
  {
    label: "HR",
    baseSlug: "hr",
    items: [
      { label: "Leave", slug: "leave" },
      { label: "Employee Data", slug: "employee-data" }
    ]
  },
  {
    label: "Other Sites",
    baseSlug: "other-sites",
    items: [
      { label: "Corporate", slug: "corporate" },
      { label: "Thermal", slug: "thermal" },
      { label: "Mines", slug: "mines" },
      { label: "Services", slug: "services" },
      { label: "Important Sites", slug: "important-sites" }
    ]
  },
  {
    label: "KM",
    baseSlug: "km",
    items: [
      { label: "Knowledge Base", slug: "knowledge-base" },
      { label: "Documentation", slug: "documentation" }
    ]
  },
  {
    label: "Photos",
    baseSlug: "photos",
    items: [
      { label: "Events", slug: "events" },
      { label: "Plant", slug: "plant" }
    ]
  }
];

export default function Navbar() {
  return (
    <nav className="nlc-navbar">

      {/* LEFT — LOGO + TITLE */}
      <div className="navbar-left">
        <img src="/images/logo.png" className="nlc-logo" alt="Logo" />

        <div className="title-block">
          <h1 className="nlc-title">NLC India Limited</h1>
          <p className="nlc-sub">(Navratna – Government of India Enterprise)</p>
        </div>
      </div>

      {/* RIGHT — MENU */}
      <ul className="navbar-menu">

        <li><Link to="/">Home</Link></li>

        {menu.map((group) => (
          <li className="dropdown" key={group.label}>
            <span className="dropbtn">{group.label}</span>

            <div className="dropdown-content">
              {group.items.map((item) => {
                const path = `/${group.baseSlug}/${item.slug}`;
                const slug = `${group.baseSlug}-${item.slug}`;
                return (
                  <Link key={item.slug} to={path} state={{ slug }}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </li>
        ))}

        <li><Link to="/contact">Contact</Link></li>
       
      </ul>
    </nav>
  );
}
