import React from 'react'
import categories from '../../assets/categories.json'
import { useSelector } from 'react-redux'
import { stateProducts } from '../../redux/products/slice'
import Category from './Category'

const Categories = () => {
  const { activeCategory } = useSelector(stateProducts)

  return (
    <>
      <h6 className="sidebar-title">Категории</h6>

      <div className="sidebar-content">
        <div className="recent-post">
          <ul>
            {/* <!-- Start Single Recent Post Item --> */}
            {categories.map((category) => (
              <Category
                key={category.id}
                {...category}
                active={Number(activeCategory)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Categories
