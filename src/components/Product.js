export default function Products({productImg, productTitle, productPrice, onAddToCart}) {
    
    return (
      <div className="product">
        <img src={productImg} alt=''></img>
        <p>{productTitle}</p>
        <p>{productPrice}</p>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    )
  }