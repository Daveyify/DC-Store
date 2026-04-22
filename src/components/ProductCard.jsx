function ProductCard({ product, onAddToCart }) {
    return (
        <div style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3>{product.name}</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>{product.description}</p>
            <p style={{ fontWeight: "bold", fontSize: "18px", color: "#2563eb" }}>
                ${product.price}
            </p>
            <button
                onClick={() => onAddToCart(product)}
                style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
            >
                Add to cart 🛒
            </button>
        </div>
    )
}

export default ProductCard