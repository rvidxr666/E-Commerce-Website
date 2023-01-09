import {Link} from 'react-router-dom'

const ProductHeading = ({product}) => {
    return (
        <div className="col-lg-3 col-md-6 mb-4">

        <div className="card">

          <div className="view overlay">
            <img src={product.header_image} height="400px" className="card-img-top" alt=""/>
            <Link state={product} to={`/products/${product.category_id}/${product.pk}`}>
              <div className="mask rgba-white-slight waves-effect waves-light"></div>
            </Link>
          </div>

          <div className="card-body text-center">
            <a href="" className="grey-text">
              <h5>{product.category}</h5>
            </a>
            <h5>
              <strong>
              <Link state={product} to={`/products/${product.category_id}/${product.pk}`} className="dark-grey-text">{product.name}</Link>
              </strong>
            </h5>

            <h4 className="font-weight-bold blue-text">
              <strong>{product.price}$</strong>
            </h4>
          </div>
        </div>
      </div>
    )
}

export default ProductHeading;