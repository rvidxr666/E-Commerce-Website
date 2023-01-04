import React from 'react';

const Pagination = ({productsPerPage, totalAmount, changePageFunc, nextPage, previousPage}) => {

    var arrPages = []
    const amountOfPages = Math.ceil((totalAmount / productsPerPage))

    for (let i = 1; i <= amountOfPages; i++ ) {
        arrPages.push([i, "page-item"])
    }

    return (
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li class="page-item"><a class="page-link" onClick={previousPage}>Previous</a></li>
                {arrPages.map((num, index) => {
                    return <li key={num[0]} onClick={() => {changePageFunc(num[0])}} className={num[1]}><a className="page-link">{num[0]}</a></li>
                })}
                <li class="page-item"><a class="page-link" onClick={nextPage}>Next</a></li>
            </ul> 
      </nav>
    )
}


export default Pagination;