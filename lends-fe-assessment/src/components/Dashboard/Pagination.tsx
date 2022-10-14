import { useState } from 'react'

// Addding some properties from the Dashboard component 
type postProps ={
    usersPerPage: number
    totalUsers: number
    paginate: (arg: number) =>void
    handleNext: any
    currentPage: any
    handlePrev: any
}

const Pagination: React.FC<postProps> = ({usersPerPage, totalUsers, paginate, handleNext, currentPage, handlePrev}) =>{
    const [pageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    const pageNumbers = []
    
    // Getting the array of page numbers
    for(let i = 1; i<= Math.ceil(totalUsers/ usersPerPage); i++){
        pageNumbers.push(i)
    }


    // This function handles changing of the pages to the next one from the Pagination component
    const handleNextPage = () =>{
        if((currentPage + 1) > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }
    
    // This function handles changing of the pages to the previous one from the Pagination component
    const handlePrevPage = () =>{
        if((currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }

    return(
        <div className="pagination">
            <div>
                <span>Showing </span>
                <span className="drop--down"> 100 <img src="Image/SideNav/dropdown.svg" alt="" /></span>
                <span>out of 100</span>
            </div>
            <div className="page-list">
                <button 
                        className='arrow-btn' 
                        onClick={() =>{handlePrev(); handlePrevPage()}} disabled={currentPage == pageNumbers[0] ? true : false}>
                        {/* the disabled property makes it impossible to change to the previous page once you're on page one */}
                    <img src="Image/left-arrow.svg" alt="" className='icon'/>
                </button>
                {pageNumbers.map(number =>{
                    // Mapping the array of page numbers to get the Pagination component to show
                    if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
                        // this controls the page numbers shown in the pagination component
                        return(
                            <li key={number}>
                                <a onClick={() =>paginate(number)} href="#" className={currentPage === number ? 'page-item active': 'page-item'}>{number}</a>
                                {/* this ensures that the page number clicked on corresponds to the current page */}
                            </li>
                        )
                    }
                    else{
                        return null
                    }
                })}
                <button 
                        className='arrow-btn' 
                        onClick={() =>{handleNext(); handleNextPage()}}
                        disabled={currentPage == pageNumbers[pageNumbers.length - 1] ? true : false}>
                        {/* the disabled property makes it impossible to change to the next page once you're on page ten */}
                    <img src="Image/right-arrow.svg" alt="" className='icon'/>
                </button>
              </div>
        </div>
    )
}

export default Pagination