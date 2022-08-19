import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setForMeChecked, stateProducts } from '../../redux/products/slice'
import { MONEY } from '../../redux/products/slice'

const SortForMe = () => {
  const { forMeChecked } = useSelector(stateProducts)
  const dispatch = useDispatch()

  return (
    <li className="recent-post-list _sort">
      <label className="recent-post__radio radio">
        <input
          type="checkbox"
          className="radio__input"
          checked={forMeChecked}
          onChange={() => dispatch(setForMeChecked(!forMeChecked))}
          name="price(inc)"
        />
        <span className="radio__text">
          <span>Доступные мне ({MONEY}р.)</span>
        </span>
      </label>
    </li>
  )
}

export default SortForMe
