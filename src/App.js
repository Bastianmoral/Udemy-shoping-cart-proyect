import { Component } from 'react';
import Products from './Components/Products'
import './App.css';


class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/products/tomate.jpg'},
      { name: 'Arvejas', price: 2500, img: '/products/arvejas.jpg'},
      { name: 'Lechuga', price: 500, img: '/products/lechuga.jpg'},
    ]
  }
  
  
  render () {
    return (
      <div> 
        <Products 
          addToCart={() => console.log('No hace nada')}
          products={this.state.products}

        />        
      </div>
    )
  }
}


export default App;