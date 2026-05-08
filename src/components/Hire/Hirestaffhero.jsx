import { Link } from "react-router-dom";

const stats = [
  { value: "1,000+", label: "Customers served" },
  { value: "70%",    label: "Average cost reduction" },
  { value: "97.3%",  label: "Staff retention rate" },
  { value: "7 days", label: "Average hire time" },
];

const logos = [
  { abbr: "EA", name: "Endocrinology Associates, PA" },
  { abbr: "D",  name: "DHRHealth" },
  { abbr: "K",  name: "Knippenberg Insurance" },
  { abbr: "N",  name: "Nava N" },
];

const HireStaffHero = () => {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "clamp(40px, 6vw, 64px) 0",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        minHeight: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1280, width: "100%", padding: "0 24px", margin: "0 auto" }}>
      {/* Heading */}
      <h1
        style={{
          fontSize: "clamp(2.6rem, 5.8vw, 4.4rem)",
          fontWeight: 900,
          color: "#4D9BD6",
          lineHeight: 1.02,
          marginBottom: "0px",
          letterSpacing: "-0.08em",
        }}
      >
        Hire Trained Remote Admin Staff
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#199A6F",
          marginBottom: "10px",
          marginTop: "16px",
        }}
      >
        HIPAA-certified. Software-ready. Fully managed by HBS.
      </p>

      {/* Sub text */}
      <p
        style={{
          fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
          fontWeight: 400,
          color: "#52525B",
          lineHeight: 1.6,
          maxWidth: "560px",
          margin: "22px auto 32px",
        }}
      >
        Trusted by 1,000+ medical practices and insurance agencies. Build your
        remote team in as little as 7 days.
      </p>

      {/* Stats Box */}
      <div
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "center",
          background: "#E0F7EF",
          border: "1px solid #BCEFDC",
          borderRadius: "14px",
          padding: "20px 16px",
          marginBottom: "32px",
          gap: "0",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "0 24px",
              borderRight: i < stats.length - 1 ? "1px solid #BCEFDC" : "none",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "26px",
                fontWeight: 900,
                color: "#199A6F",
              }}
            >
              {s.value}
            </span>
            <span
              style={{
                display: "block",
                fontSize: "11.5px",
                color: "#52525B",
                fontWeight: 500,
                marginTop: "4px",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "44px",
        }}
      >
        <Link
          to="/contact"
          style={{
            background: "#199A6F",
            color: "#fff",
            padding: "13px 32px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "1.08rem",
            textDecoration: "none",
            display: "inline-block",
            transition: "background 0.22s, box-shadow 0.22s, transform 0.22s",
            boxShadow: "0 4px 24px 0 rgba(139,92,246,0.10)",
            marginRight: "8px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#4D9BD6";
            e.currentTarget.style.boxShadow = "0 8px 32px 0 rgba(139,92,246,0.22)";
            e.currentTarget.style.transform = "translateY(-2px) scale(1.055)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#199A6F";
            e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(139,92,246,0.10)";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          Book a Demo →
        </Link>

        <button
          onClick={() => {
            const section = document.getElementById("dental-roles-section");
            if (section) {
              const headerOffset =
                document.querySelector(".site_header_1")?.offsetHeight || 0;
              const offsetPosition =
                section.getBoundingClientRect().top +
                window.pageYOffset -
                headerOffset -
                20;
              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
          }}
          style={{
            background: "#fff",
            color: "#18181B",
            padding: "13px 32px",
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "1.08rem",
            border: "1.5px solid #E5E7EB",
            cursor: "pointer",
            transition: "all 0.22s",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#4D9BD6";
            e.currentTarget.style.color = "#4D9BD6";
            e.currentTarget.style.background = "#F4F4F5";
            e.currentTarget.style.transform = "translateY(-2px) scale(1.055)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E5E7EB";
            e.currentTarget.style.color = "#18181B";
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          Browse Roles ↓
        </button>
      </div>

      {/* Trust Label */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          color: "#199A6F",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Trusted by 1,000+ Medical and Insurance Organizations
      </p>

      {/* Logos */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              opacity: 0.65,
            }}
          >
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "#E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: 800,
                color: "#64748B",
                flexShrink: 0,
              }}
            >
              {logo.abbr}
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#64748B",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {logo.name}
            </span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HireStaffHero;