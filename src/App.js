import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import { useState } from 'react';

const products = [
  {
    id: 0,
    productImg: './images/poloNam.jpeg',
    productTitle: 'MEN T-SHIRT 0',
    productPrice: '500.000 VND',
    type: 'MEN',
  },
  {
    id: 1,
    productImg: './images/somiNam.jpeg',
    productTitle: 'MEN T-SHIRT 1',
    productPrice: '500.000 VND',
    type: 'MEN',
  },
  {
    id: 2,
    productImg: './images/thunNam.jpeg',
    productTitle: 'MEN T-SHIRT 2',
    productPrice: '500.000 VND',
    type: 'WOMEN',
  },
  {
    id: 3,
    productImg: './images/somiNam1.jpeg',
    productTitle: 'MEN T-SHIRT 3',
    productPrice: '500.000 VND',
    type: 'WOMEN',
  }
]

function App() {
  const [listCart, setListCart] = useState([]);
  const handleAddToCart = (product) => {
    // setListCart(listCart.push(product))
    alert(`Ban dang chon ${product.productTitle}`)
  }

  return (
    <div className="App">
      <Header />
      <h3 style={{textAlign: 'center'}}>List Product</h3>
      <div className='product-container'>
        {
          products.map((product) => {
            return (
              <Product
                key={product.id}
                productImg={product.productImg}
                productTitle={product.productTitle}
                productPrice={product.productPrice}
                onAddToCart={() => handleAddToCart(product)}
              />
            )
          })
        }
      </div>

      <div className='product-container'>
        <h3 style={{textAlign: 'center'}}>List Cart</h3>
        {
          listCart.length > 0 && listCart.map((product) => {
            return (
              <Product
                key={product.id}
                productImg={product.productImg}
                productTitle={product.productTitle}
                productPrice={product.productPrice}
                onAddToCart={() => handleAddToCart(product)}
              />
            )
          })
        }
      </div>
    </div>
  );
}
export default App;

