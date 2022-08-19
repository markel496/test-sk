import React, { useState, useEffect } from 'react'

const UpBtn = () => {
  const [showUpBtn, setShowUpBtn] = useState(false)

  const handleVisibleButton = () => {
    setShowUpBtn(window.pageYOffset > 300)
  }

  const handleScrollUp = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
  }, [])

  return (
    showUpBtn && <button className="upbtn" onClick={handleScrollUp}></button>
  )
}

export default UpBtn
