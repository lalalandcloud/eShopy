import './cart.css'

function Cart({argent, cb}){
    console.log("Contenu du panier:", cb);
    return(
        <div id='divGloCart'>
            <div>
                <h2>Cart</h2>
                <h3>Portefeuille : {argent}€</h3>
            </div>
            <div>
                <div>
                    {/* <img src="" alt="" /> */}
                </div>
                <div>
                    <h4>produits achetés :</h4>
                    <ul>
                        {Object.entries(cb || {}).map(([name, qty]) => (
                            <li key={name}>
                                {name} : {qty}
                                <button>rendre</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart