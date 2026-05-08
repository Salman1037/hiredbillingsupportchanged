const Ctasection = () => {
  return (
    <section
      style={{
        backgroundColor: "#E0F7EF",
        padding: "clamp(80px, 8vw, 60px) 20px",
        // marginTop: "120px",
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
            background: "#F0FDF4",
            color: "#166534",
            padding: "6px 14px",
            borderRadius: "99px",
            fontSize: "12px",
            fontWeight: 600,
            border: "1px solid #DCFCE7",
            marginBottom: "36px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#22C55E",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Limited onboarding spots for February
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#4D9BD6",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Your next full-time hire
          <br />
          is <span style={{ color: "#199A6F" }}>7 days away</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "15px",
            color: "#475569",
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
            background: "#4D9BD6",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "15px",
            padding: "16px 32px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            marginBottom: "28px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#3a87c2")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#4D9BD6")}
        >
          Book a Demo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
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
            color: "#166534",
          }}
        >
          {["No payment until you hire", "BAA signed before start", "Cancel anytime"].map((item) => (
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
                stroke="#22C55E"
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
