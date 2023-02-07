export default function Products({type, productImg, productTitle, productPrice, onSubmit}) {
    
    return (
      <div className="product">
        <img src={productImg} alt=''></img>
        <p>{productTitle}</p>
        <p>{productPrice}</p>
        <button onClick={onSubmit}>{type === 'PRODUCT' ? 'Add to cart' : 'Remove'} </button>
      </div>
    )
  }
