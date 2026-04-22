import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
    return (
        <nav style={{
            backgroundColor: "#1e293b",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: "0",
            zIndex: "100"
        }}>
            <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "20px", fontFamily: "Bowlby One SC" }}>
                DC-Store
            </Link>

            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <Link to="/" style={{ color: "#cbd5e1", textDecoration: "none" }}>
                    Products
                </Link>
                <Link to="/carrito" style={{ color: "#cbd5e1", textDecoration: "none" }}>
                    🛒 Cart
                    <span style={{
                        backgroundColor: "#2563eb",
                        color: "white",
                        borderRadius: "20px",
                        padding: "2px 10px",
                        fontWeight: "bold",
                        marginLeft: "6px"
                    }}>
                        {cartCount}
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar