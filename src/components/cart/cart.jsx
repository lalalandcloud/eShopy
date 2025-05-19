import './cart.css'

function Cart({argent, cb, remettre, show}){
    if (!show) return null
    

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
                    <h4>Panier:</h4>
                    <ul id='ulCard'>
                        {Object.entries(cb || {}).map(([name, qty]) => (
                            <li key={name}>
                                {name} : {qty}
                                <button 
                                    onClick={() => remettre(name)}
                                    disabled={qty === 0}
                                >
                                    rendre
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart