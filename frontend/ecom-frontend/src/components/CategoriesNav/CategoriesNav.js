

const CategoriesNav = () => {
    return (        
    <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
        <div className="container-fluid">
            <span className="navbar-brand">Categories: </span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">All</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Skate</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Auto</a>
                </li>
                <li className="nav-item">
                <a className="nav-link">Clothing</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    )
}


export default CategoriesNav;