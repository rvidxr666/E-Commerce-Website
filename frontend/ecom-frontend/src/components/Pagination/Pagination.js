

const Pagination = ({productsPerPage, totalAmount, changePageFunc, nextPage, previousPage}) => {
    
    let arrPages = []
    const amountOfPages = Math.ceil((totalAmount / productsPerPage))
    

    for (let i = 1; i <= amountOfPages; i++ ) {
        arrPages.push(i)
    }

    console.log(arrPages)

    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li class="page-item"><a class="page-link" onClick={previousPage}>Previous</a></li>
                {arrPages.map(num => {
                    return <li key={num} onClick={() => changePageFunc(num)} className="page-item"><a className="page-link">{num}</a></li>
                })}
                <li class="page-item"><a class="page-link" onClick={nextPage}>Next</a></li>
            </ul> 
      </nav>
    )
}


export default Pagination;