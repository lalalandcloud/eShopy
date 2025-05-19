import './cart.css'

function Cart({argent, cb, remettre}){
    // if (!show) return null
    if (!cb || Object.values(cb).every(qty => qty === 0)){
        return null
    }

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
                                <button className='show'
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