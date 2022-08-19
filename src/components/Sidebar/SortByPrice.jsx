import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateProducts, setRadioValue } from '../../redux/products/slice'

const SortByPrice = () => {
  const { radioValue } = useSelector(stateProducts)
  const dispatch = useDispatch()

  return (
    <>
      <label className="recent-post__radio radio">
        <input
          type="radio"
          className="radio__input"
          name="price(inc)"
          value="incPrice"
          checked={radioValue === 'incPrice' ? true : false}
          onChange={(e) => dispatch(setRadioValue(e.target.value))}
        />
        <span className="radio__text">
          <span>Сначала дешевле</span>
        </span>
      </label>
      <label className="recent-post__radio radio">
        <input
          type="radio"
          className="radio__input"
          value="decPrice"
          checked={radioValue === 'decPrice' ? true : false}
          name="price(dec)"
          onChange={(e) => dispatch(setRadioValue(e.target.value))}
        />
        <span className="radio__text">
          <span>Сначала дороже</span>
        </span>
      </label>
    </>
  )
}

export default SortByPrice
