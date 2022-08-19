import React from 'react'
import categories from '../../assets/categories.json'

const ProductBlock = ({ id, file, name, category, price }) => {
  const categoryName = categories.find(
    (obj) => obj.id.toString() === category
  ).name

  return (
    <div className="col-md-6 col-12">
      {/* <!-- Start Blog Grid Single --> */}
      <div className="blog-feed-single">
        <a href="#" className="blog-feed-img-link">
          <img
            src={require(`../../assets/uploads_Shop/${id}/${file}`)}
            alt=""
            className="blog-feed-img"
          />
        </a>
        <div className="blog-feed-content">
          <div className="blog-feed-post-meta">
            <span>Стоимость: {price}</span>
            <br />
            <span>
              Категория:
              <a href="#"> {categoryName}</a>
            </span>
            <br />
          </div>
          <h5 className="blog-feed-link">
            <a href="#">{name}</a>
          </h5>
        </div>
      </div>
      {/* <!-- End Blog Grid Single --> */}
    </div>
  )
}

export default ProductBlock
