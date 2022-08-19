import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveBurger } from '../../redux/burger/slice'
import { sortByCategory, resetSort } from '../../redux/products/slice'

const Category = ({ id, name, active }) => {
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(resetSort())
    dispatch(setActiveBurger(false))
    dispatch(sortByCategory(id.toString()))
  }

  return (
    <li className="recent-post-list">
      <div
        className={active !== id ? 'post-content' : 'post-content _active'}
        onClick={clickHandler}
      >
        {name}
      </div>
    </li>
  )
}

export default Category
