import Cart from "./Cart/Cart";
import Products from "./Products/Products";

import './Content.scss'

function Content() {
    return (
        <main className="content-grid">
            <Cart/>
            <Products/>
        </main>
    )
}

export default Content;