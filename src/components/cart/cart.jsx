import './cart.css'

function Cart({argent, nom, cb}){
    return(
        <div id='divGloCart'>
            <div>
                <h2>Cart</h2>
                <h3>Portefeuille : {argent}</h3>
            </div>
            <div>
                <div>
                    {/* <img src="" alt="" /> */}
                </div>
                <div>
                    <h6>{nom} : {cb}</h6>
                </div>
            </div>
        </div>
    )
}

export default Cart