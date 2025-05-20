import './cart.css'

function Cart({argent, cb, remettre}){
    // if (!cb || Object.values(cb).every(qty => qty === 0)){
    //     return null
    // }

    return(
        <div id='divGloCart'>
            <div id='divH'>
                <h2>Cart</h2>
                <h3>Portefeuille : {argent}€</h3>
            </div>
            <div>
                <div id='divFin'>
                    <h4>Panier:</h4>
                    <ul id='ulCard'>
                        {Object.entries(cb || {}).map(([name, qty]) => (
                            <li key={name}>
                                {name} : <b>{qty}</b>
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