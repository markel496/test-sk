import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateBurger, setActiveBurger } from '../redux/burger/slice'

const BurgerBtn = () => {
  const { activeBurger } = useSelector(stateBurger)
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (activeBurger) {
        document.body.classList.add('disable-scroll')
      } else {
        document.body.classList.remove('disable-scroll')
      }
    }
  }, [activeBurger])

  return (
    <div
      className={!activeBurger ? 'burger-btn' : 'burger-btn _active'}
      onClick={() => dispatch(setActiveBurger(!activeBurger))}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerBtn
