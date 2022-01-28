import { Component } from "react";
import Product from './Product.js'



const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}
class Products extends Component {
  render () {
    const { products, addToCart } = this.props
    return (
      <div style={styles.products}>
        {products.map(product => 
          <Product
          addToCart={addToCart}
          key={product.name}
          product={product}
          />)}  { /*Acá se iteran todos los productos que le estamos pasando como propiedad. Solo debemos pasarle la función*/ }
      </div>
      )
  }
}

export default Products