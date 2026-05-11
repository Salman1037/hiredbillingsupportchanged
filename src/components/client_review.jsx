import React from "react";
import { FaStar, FaArrowUp, FaArrowDown } from "react-icons/fa";

const reviews = [
  {
    name: "Dr Ruth - Edwin DMD/MS",
    title: "Diplomate of American Board of Periodontology",
    avatar: "RE",
    highlight: "↑ More appointments captured",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.
      </>
    ),
    stars: 5,
  },
  {
    name: "Herma Thompson PMHNP-BC",
    title: "Nurse Practitioner - Psych/Mental Health",
    avatar: "HT",
    highlight: "↑ Streamlined billing operations",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly.
      </>
    ),
    stars: 5,
  },
  {
    name: "Dr Afreen Sheikh",
    title: "Internal Medicine",
    avatar: "AS",
    highlight: "↑ More bedside time",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        Remote staffing solution by HBS has freed the resources of the HBS, enabling us to spend more time at the bedside and enhance the efficiency of the whole process.
      </>
    ),
    stars: 5,
  },
  {
    name: "Dr. Layla Hassan",
    title: "Genesis Internal Medicine",
    avatar: "LH",
    highlight: "↑ Practice growth with HBS",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        With the help of HBS their support and expertise we have achieved a lot more in practice.
      </>
    ),
    stars: 5,
  },
];

const cardStyle = {
  background: "#ffffff",
  borderRadius: 20,
  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
  padding: "1.4rem 1.15rem 1.1rem 1.15rem",
  minHeight: 220,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #f3f0ff",
  transition: "transform 0.28s cubic-bezier(.2,.8,.2,1), box-shadow 0.28s cubic-bezier(.2,.8,.2,1), border-color 0.28s cubic-bezier(.2,.8,.2,1)",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
};

const avatarStyle = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "linear-gradient(135deg, #199A6F 0%, #34d399 100%)",
  color: "#fff",
  fontWeight: 700,
  fontSize: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 10,
  boxShadow: "0 1px 4px 0 rgba(80, 80, 120, 0.08)",
};

const highlightStyle = (color) => ({
  background: color,
  color: "#0f172a",
  fontWeight: 600,
  fontSize: 12,
  borderRadius: 14,
  padding: "3px 10px",
  display: "inline-flex",
  alignItems: "center",
  marginTop: 7,
  boxShadow: "0 1px 3px 0 rgba(80,80,120,0.07)",
});

const ClientReview = () => (
  <section style={{ padding: "clamp(40px, 6vw, 64px) 0", background: "#F8FAFC" }}>
    <style>{`
      .cr-section {
        position: relative;
      }
      .cr-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
        max-width: 1200px;
        margin: 2rem auto 0 auto;
        padding: 0 20px;
      }
      .cr-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 36px rgba(15, 23, 42, 0.12);
        border-color: #8B5CF6;
      }
      .cr-card:hover .cr-star {
        transform: translateY(-1px) scale(1.03);
      }
      .cr-card:hover .cr-highlight {
        transform: translateY(-1px);
      }
      @media (max-width: 960px) {
        .cr-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 640px) {
        .cr-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
    <h2 style={{ textAlign: "center", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, marginBottom: 8, letterSpacing: -1, lineHeight: 1.1 }}>
      <span
        style={{
          background: "#3498db",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Don't take our word for it.
      </span>
      <br />
      <span
        style={{
          background: "#1abc9c",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Take <b>theirs</b>.
      </span>
    </h2>
    <p style={{ textAlign: "center", color: "#64748b", margin: "0 auto", maxWidth: 700, padding: "0 20px", fontSize: "16px", lineHeight: 1.6 }}>
      Real feedback from healthcare and operations teams that rely on HBS every day.
    </p>
    <div className="cr-grid">
      {reviews.map((r, i) => (
        <div
          key={i}
          style={{ ...cardStyle, ...(r.highlightType === "up" ? { borderColor: r.highlightColor } : { borderColor: "#eef2ff" }) }}
          className="cr-card"
        >
          <div>
            <div style={{ marginBottom: 7 }}>
              {[...Array(r.stars)].map((_, idx) => <FaStar key={idx} className="cr-star" color="#199A6F" style={{ marginRight: 1, fontSize: 13, transition: "transform 0.28s cubic-bezier(.2,.8,.2,1)" }} />)}
            </div>
            <div style={{ fontSize: 15, color: "#1f2937", marginBottom: 12, lineHeight: 1.55 }}>
              <span style={{ fontWeight: 400, fontStyle: "italic" }}>&ldquo;{r.review}&rdquo;</span>
            </div>
            <hr style={{ border: 0, borderTop: "1px solid #e5edf5", margin: "14px 0 10px 0" }} />
            <div style={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
              <div style={avatarStyle}>{r.avatar}</div>
              <div>
                <div style={{ fontWeight: 800, color: "#0f172a", fontSize: 13.5 }}>{r.name}</div>
                <div style={{ color: "#64748b", fontSize: 11.5 }}>{r.title}</div>
              </div>
            </div>
            <div style={highlightStyle(r.highlightColor)} className="cr-highlight">
              {r.highlightType === "up" ? <FaArrowUp style={{ marginRight: 5, color: "#199A6F", fontSize: 13 }} /> : <FaArrowDown style={{ marginRight: 5, color: "#7c3aed", fontSize: 13 }} />}
              {r.highlight}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClientReview;
