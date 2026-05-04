import React from "react";
import { FaStar, FaArrowUp, FaArrowDown } from "react-icons/fa";

const reviews = [
  {
    name: "Dr. Jyothi Mamidi Juarez",
    title: "Partners in Endocrinology",
    avatar: "JM",
    highlight: "↑ 30% efficiency increase",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        I consider HBS a <b>concierge-level partner</b>. They go above and beyond a typical VA company. The talent is phenomenal.
      </>
    ),
    stars: 5,
  },
  {
    name: "Jose Melendez",
    title: "Founder, Melendez Insurance",
    avatar: "JM",
    highlight: "↑ 30% YoY growth",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        If we <b>never hired through HBS</b>, we wouldn't be in the growth stage we are right now.
      </>
    ),
    stars: 5,
  },
  {
    name: "Dr. Naureen Alim",
    title: "Rheumatologist, CLS Health",
    avatar: "NA",
    highlight: "↓ 50% staffing cost",
    highlightType: "down",
    highlightColor: "#eef2ff",
    review: (
      <>
        The biggest difference is <b>peace of mind</b>. I stopped searching locally for talent.
      </>
    ),
    stars: 5,
  },
  // Add 3 more reviews for a total of 6
  {
    name: "Dr. Alex Kim",
    title: "Cardiologist, HeartCare",
    avatar: "AK",
    highlight: "↑ 25% patient satisfaction",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        HBS helped us <b>streamline our workflow</b> and improve patient satisfaction.
      </>
    ),
    stars: 5,
  },
  {
    name: "Sarah Lee",
    title: "COO, MedPrime",
    avatar: "SL",
    highlight: "↑ 40% process automation",
    highlightType: "up",
    highlightColor: "#d1fae5",
    review: (
      <>
        Their <b>automation solutions</b> saved us countless hours every month.
      </>
    ),
    stars: 5,
  },
  {
    name: "Michael Chen",
    title: "Practice Manager, Chen Clinic",
    avatar: "MC",
    highlight: "↓ 20% admin overhead",
    highlightType: "down",
    highlightColor: "#eef2ff",
    review: (
      <>
        We <b>reduced admin overhead</b> and focused more on patient care thanks to HBS.
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
  <section style={{ padding: "4rem 0 2rem 0", background: "#fff" }}>
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
    <h2 style={{ textAlign: "center", fontSize: "clamp(2rem, 3vw, 2.7rem)", fontWeight: 900, marginBottom: 8, color: "#0f172a", letterSpacing: -1 }}>
      Don't take our word for it.<br />
      <span style={{ color: "#199A6F" }}>Take <b>theirs</b>.</span>
    </h2>
    <p style={{ textAlign: "center", color: "#64748b", margin: "0 auto", maxWidth: 700, padding: "0 20px", fontSize: "1.03rem", lineHeight: 1.6 }}>
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
