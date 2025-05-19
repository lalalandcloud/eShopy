import './App.css'
import Card from './components/card/card'
import json from '../data.json'

function App() {

  return (
    <>
      <div>
        {json.map((item, index) => (
          <Card
          key={index}
          name = {item.name}
          price = {item.price}
          stock = {item.stock}
          />


        ))}

      </div>
        
    </>
  )
}

export default App
