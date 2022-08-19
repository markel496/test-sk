import React from 'react'
import { useSelector } from 'react-redux'
import { stateBurger } from '../../redux/burger/slice'
import Categories from './Categories'
import Sort from './Sort'

const SidebarArea = () => {
  const { activeBurger } = useSelector(stateBurger)

  return (
    <div className={!activeBurger ? 'col-lg-3' : 'col-lg-3 _active'}>
      {/* <!-- Start Sidebar Area --> */}
      <div className="siderbar-section">
        {/* <!-- Start Single Sidebar Widget --> */}
        <div className="sidebar-single-widget">
          <Categories />
          <Sort />
        </div>
        {/* <!-- End Single Sidebar Widget --> */}
      </div>
      {/* <!-- End Sidebar Area --> */}
    </div>
  )
}

export default SidebarArea
