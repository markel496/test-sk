import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SortByName from './SortByName'
import SortByPrice from './SortByPrice'
import SortByDynamicPrice from './SortByDynamicPrice'
import SortForMe from './SortForMe'
import {
  stateProducts,
  sortByVariablePrice,
  sortByPriceAndName,
  sortForMe,
  resetSort,
  setVisibleApplyBtn,
} from '../../redux/products/slice'
import { setActiveBurger } from '../../redux/burger/slice'

const Sort = () => {
  const {
    priceValue,
    minPrice,
    maxPrice,
    radioValue,
    forMeChecked,
    visibleApplyBtn,
  } = useSelector(stateProducts)
  const dispatch = useDispatch()

  const apply = () => {
    dispatch(sortForMe())
    dispatch(sortByVariablePrice())
    dispatch(sortByPriceAndName())
    dispatch(setVisibleApplyBtn())
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    dispatch(setActiveBurger(false))
  }

  const reset = () => {
    dispatch(resetSort())
  }

  return (
    <>
      <h6 className="sidebar-title">Сортировка</h6>
      <div className="sidebar-content">
        <div className="recent-post">
          <ul>
            <li className="recent-post-list _sort _radio">
              <SortByName />
              <SortByPrice />
            </li>
            {minPrice !== maxPrice && (
              <li className="recent-post-list _sort _dynamic">
                <SortByDynamicPrice />
              </li>
            )}
            <SortForMe />
          </ul>
        </div>
        {!radioValue && priceValue === minPrice && !forMeChecked ? (
          visibleApplyBtn && (
            <div className="sidebar__btns">
              <button className="apply-btn" onClick={apply}>
                Применить
              </button>
            </div>
          )
        ) : (
          <div className="sidebar__btns">
            <button className="apply-btn" onClick={apply}>
              Применить
            </button>
            <button className="channel-btn" onClick={reset}>
              Сбросить
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Sort
