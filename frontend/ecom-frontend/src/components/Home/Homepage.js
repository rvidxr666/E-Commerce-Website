import {Link} from 'react-router-dom'


const Homepage = () => {
    return (
        <div className="container py-4">

            <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Explore all products</h1>
                <p className="col-md-8 fs-4">Our website offers various products starting from the beautiful accessories and finsihing with the household products</p>
                <Link to="/products" className="btn btn-primary btn-lg">Explore Products</Link>
            </div>
            </div>

            <div className="row align-items-md-stretch">
            <div className="col-md-6">
                <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Explore categories</h2>
                <p>Explore products grouped by categories</p>
                <Link to="/categories" className="btn mt-4 btn-outline-light">Explore Categories</Link>
                </div>
            </div>
            <div className="col-md-6">
                <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Register or Login</h2>
                <p>Sign in into to your user account in order to place an order and request a delivery</p>
                <Link to="/login" className="btn btn-outline-secondary">Access the account</Link>
            </div>
            </div>
        </div>
    </div>
    )
}


export default Homepage;