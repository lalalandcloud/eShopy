import './App.css'
import Card from './components/card/card'
import json from '../data.json'
import { useState } from 'react'
import Cart from './components/cart/cart'


function App() {
  const [showDiv, setShowDiv] = useState(false)
  const [argent, setArgent] = useState(15)
  const [cart, setCart] = useState ([])
  const [select, setSelect] = useState(null)
  const [stockList, setStockList] = useState(json.map (item => Number(item.stock)))
  const [nomProduit, setNomProduit] = useState(json.map (item => (item.name)))
  const [panier, setPanier] = useState(() => {
    const initial ={}
    json.forEach(item=> {
      initial[item.name] = 0
    })
    return initial
  })

  // if (panier > 0){
  //   setShowDiv === true
  // }

  const rendre = (name) => {
    const index = json.findIndex(item => item.name === name)
    if (index === -1) return;
    const price = parseFloat(json[index].price.trim());

    setStockList(prev =>{
      const nNewStock = [...prev]
      nNewStock[index] +=1
      return nNewStock
    });
    setArgent(prev => prev + price)
    setPanier(prev => ({
      ...prev,
      [name] : Math.max(0, prev[name] -1)
    }));
  }
  
  const handleBuy = (index) => {
    const price = parseFloat(json[index].price.trim());

    if (stockList[index] > 0 && argent >= price){
      setStockList(prev => {
        const newStock = [...prev]
        newStock[index] -=1
        return newStock
      });
      setArgent(prev => prev - price)
      setPanier(prev => ({
        ...prev,
        [json[index].name] : prev[json[index].name] +1
      }))
    }
  }

  // const incrementation = () => {
  //   if (stock > 0 && argent > price){
  //     setArgent (prev => prev - {price})
  //     setPanier.push(<div className='divGloCard'></div>)

  //   }
  // }
  // const handleC = (name) => {
  //   console.log(panier);
  //   incrementation()
  //   console.log(panier);
    
  // }

  return (
    <>
      <div id='divAppCards'>
        {json.map((item, index) => (
            <Card
            // onAdd={() => addToCart(item)}
              key={index}
              name = {item.name}
              price = {item.price}
              stock = {stockList[index]}
              onBuy={() => handleBuy(index)}
              argent={argent}
            />
        ))}
      </div>

      <div id='divAppCart'>
          <Cart
            argent={argent}
            cb={panier}
            remettre={rendre}
            // show={showDiv}
          />
      </div>

    </>
  )
}

export default App
