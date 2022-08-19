import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { stateProducts, setPriceValue } from '../../redux/products/slice'

const SortByDynamicPrice = () => {
  const { priceValue, minPrice, maxPrice } = useSelector(stateProducts)
  const dispatch = useDispatch()

  return (
    <Slider
      value={priceValue}
      onChange={(e) => dispatch(setPriceValue(e))}
      min={minPrice}
      max={maxPrice}
      handleLabel={priceValue.toString()}
      tooltip={false}
    />
  )
}

export default SortByDynamicPrice
