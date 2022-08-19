import React from 'react'
import BurgerBtn from './BurgerBtn'
import UpBtn from './UpBtn'

const Container = ({ children }) => {
  return (
    <>
      <BurgerBtn />
      <div className="container">
        <br />
        <div className="row flex-column-reverse flex-lg-row">{children}</div>
      </div>
      <UpBtn />
    </>
  )
}

export default Container
