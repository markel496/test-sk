import React from 'react'
import ProductBlock from './ProductBlock'
import { stateProducts } from '../../redux/products/slice'
import { useSelector } from 'react-redux'

const MainBlock = () => {
  const { products } = useSelector(stateProducts)

  console.log(products)

  return (
    <div className="col-lg-9">
      <div className="blog-grid-wrapper">
        <div className="row">
          {products.length !== 0 ? (
            products.map((product) => (
              <ProductBlock key={product.id} {...product} />
            ))
          ) : (
            <h3>Нет подходящих товаров</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainBlock
