function Hero() {
    return (
        <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #2563eb 100%)",
            color: "white",
            textAlign: "center",
            padding: "80px 20px",
        }}>
            <h1 style={{ fontSize: "48px", marginBottom: "16px", fontFamily: "Bowlby One SC" }}>
                Welcome to DC-Store
            </h1>
            <p style={{ fontSize: "20px", color: "#cbd5e1", marginBottom: "32px" }}>
                Everything a DC fan needs, all in one place. Explore our exclusive collection of DC merchandise and gear up for your next adventure!
            </p>
            <a href="#productos" style={{
                backgroundColor: "white",
                color: "#2563eb",
                padding: "14px 32px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "16px",
            }}>
                See products →
            </a>
        </div>
    )
}

export default Hero