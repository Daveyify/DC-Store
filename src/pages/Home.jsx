import ProductCard from '../components/ProductCard'
import Hero from '../components/Hero'
import products from '../data/products'

function Home({ onAddToCart }) {
    return (
        <div>
            <Hero />

            <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
                <h2 id="productos" style={{ textAlign: "center", marginBottom: "30px", color: "#1e293b" }}>
                    Our Products
                </h2>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "20px"
                }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home