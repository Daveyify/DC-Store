function Cart({ cart }) {
    const total = cart.reduce((sum, product) => sum + product.price, 0)

    if (cart.length === 0) {
        return (
            <div id="carrito" style={{
                maxWidth: "1200px",
                margin: "40px auto",
                padding: "20px",
            }}>
                <h2 style={{ color: "#1e293b", marginBottom: "16px", fontFamily: "Bowlby One SC" }}>🛒 Cart</h2>
                <p style={{ color: "#666" }}>Your cart is empty.</p>
            </div>
        )
    }

    return (
        <div id="carrito" style={{
            maxWidth: "1200px",
            margin: "40px auto",
            padding: "20px",
        }}>
            <h2 style={{ color: "#1e293b", marginBottom: "16px", fontFamily: "Bowlby One SC" }}>🛒 Cart</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {cart.map((product, index) => (
                    <div key={index} style={{
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "6px" }}
                            />
                            <span style={{ fontWeight: "500" }}>{product.name}</span>
                        </div>
                        <span style={{ fontWeight: "bold", color: "#2563eb" }}>${product.price}</span>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: "20px",
                textAlign: "right",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1e293b"
            }}>
                Total: ${total.toFixed(2)}
            </div>
        </div>
    )
}

export default Cart