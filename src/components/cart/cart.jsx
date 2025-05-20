import './cart.css'
import fleur1 from '../../assets/img/5._Bouquet_d_exception_-_Printemps_-_Colore_-_Passion_1024x1024.jpg'
import fleur2 from '../../assets/img/8401-xl@2x.jpg'
import fleur3 from '../../assets/img/meadow.jpg'


function Cart({argent, cb, remettre}){
    const image ={
        "Bouquet Champêtre": fleur1,
        "Bouquet de Luxe": fleur2,
        "Bouquet de Mariée": fleur3
        
    }

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
                                <div>
                                    <img src={image[name]} alt="" />
                                </div>
                                <div>
                                    {name} : <b>{qty}</b>
                                    <button
                                        onClick={() => remettre(name)}
                                        disabled={qty === 0}
                                    >
                                        rendre
                                    </button>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cart