import { Component } from 'react';
import Products from './Components/Products'
import './App.css'
import Layout from './Components/Layout'
import Title from './Components/Title'
import Navbar from './Components/Navbar'


class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/products/tomate.jpg'},
      { name: 'Arvejas', price: 2500, img: '/products/arvejas.jpg'},
      { name: 'Lechuga', price: 500, img: '/products/lechuga.jpg'},
    ],
    cart: [
      

    ], 
  }

  addToCart = (product) => {
    const { cart } = this.state
    if (cart.find(x => x.name === product.name)){
      const newCart = cart.map(x => x.name === product.name ? ({
        ...x,
        cantidad: x.cantidad +1
      })
      :x)  
      return this.setState ({ cart: newCart})

    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        cantidad: 1,
      })
    })
  }

  
  render () {
    console.log(this.state.cart)
    return (
      <div> 
        <Navbar />
        <Layout>
        <Title />
        <Products 
          addToCart={this.addToCart}
          products={this.state.products}

        />        
        </Layout>
      </div>
    )
  }
}


export default App;
