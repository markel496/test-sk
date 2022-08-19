import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateProducts, setRadioValue } from '../../redux/products/slice'

const SortByName = () => {
  const { radioValue } = useSelector(stateProducts)
  const dispatch = useDispatch()

  return (
    <>
      <label className="recent-post__radio radio">
        <input
          type="radio"
          className="radio__input"
          value="incName"
          name="name(inc)"
          checked={radioValue === 'incName' ? true : false}
          onChange={(e) => dispatch(setRadioValue(e.target.value))}
        />
        <span className="radio__text">
          <span>По алфавиту(возр.)</span>
        </span>
      </label>
      <label className="recent-post__radio radio">
        <input
          type="radio"
          className="radio__input"
          value="decName"
          name="name(dec)"
          checked={radioValue === 'decName' ? true : false}
          onChange={(e) => dispatch(setRadioValue(e.target.value))}
        />
        <span className="radio__text">
          <span>По алфавиту(убыв.)</span>
        </span>
      </label>
    </>
  )
}

export default SortByName
