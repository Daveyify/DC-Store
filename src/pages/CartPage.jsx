import Cart from '../components/Cart'

function CartPage({ cart }) {
    return (
        <div style={{ padding: "20px" }}>
            <Cart cart={cart} />
        </div>
    )
}

export default CartPage