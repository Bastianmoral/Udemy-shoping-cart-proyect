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
    cart: [],
    cartIsVisible: false,
  }

  addToCart = (product) => {
    const { cart } = this.state
    if (cart.find(x => x.name === product.name))  {
      const newCart = cart.map(x => x.name === product.name 
        ? ({
          ...x,
          quantity: x.quantity +1
      })
      :x)  
      return this.setState ({ cart: newCart})

    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }


  showCart = () => {
    if(!this.state.cart.length) {
      return
    }
    this.setState({ cartIsVisible: !this.state.cartIsVisible })
  }

  
  render () {
    const { cartIsVisible } = this.state
    return (
      <div> 
        <Navbar 
          cart={this.state.cart} 
          cartIsVisible={cartIsVisible} 
          showCart={this.showCart}
        />
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
