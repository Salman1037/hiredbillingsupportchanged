const Ctasection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #00B4D8 0%, #00F5A0 100%)",
        padding: "clamp(80px, 8vw, 60px) 20px",
        fontFamily: "var(--bs-body-font-family)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(255,255,255,0.18)",
            color: "#ffffff",
            padding: "6px 14px",
            borderRadius: "99px",
            fontSize: "12px",
            fontWeight: 600,
            border: "1px solid rgba(255,255,255,0.25)",
            marginBottom: "36px",
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#ffffff",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Limited onboarding spots for February
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Your next full-time hire
          <br />
          is <span style={{ color: "#0F172A" }}>7 days away</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          Book a Demo. See candidates ready to support your practice.
          <br />
          No cost, no contract.
        </p>

        {/* CTA Button */}
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#ffffff",
            color: "#00B4D8",
            fontWeight: 700,
            fontSize: "15px",
            padding: "16px 32px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            marginBottom: "28px",
            transition: "all 0.2s ease",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.background = "#f8fafc";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "#ffffff";
          }}
        >
          Book a Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#00B4D8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {/* Trust Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            flexWrap: "wrap",
            fontSize: "13px",
            color: "#ffffff",
          }}
        >
          {[
            "No payment until you hire",
            "BAA signed before start",
            "Cancel anytime",
          ].map((item) => (
            <span
              key={item}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ctasection;