import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './dashboard.scss'
import Pagination from './Pagination'
import Numbers from './userNumbers'
import SideNav from '../SideNav/SideNav'
import SideNavMobile from '../SideNav/sidenavMobile'
import Navbar from '../Navbar'
import Filter from './Filter/filter'
import { User } from '../models/user'


export default function Dashboard() {
  // State for the API data
  const[userData, setUserData] = useState<User[]>([])
  const[loading, setLoading] = useState(false)
  // State for the Pagination
  const[currentPage, setCurrentPage] = useState(1)
  // State for the hidden ellipsis options
  // State for the filter div
  const [filter, setFilter] = useState(false)
  const[usersPerPage] = useState(10)
  // State for the input search
  const [searchInput, setSearchInput] = useState("")
  // State for the side navigation
  

  // Fetching data from the API
  useEffect(() =>{
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then(res => res.json())
    .then(data => {
      setUserData(data)
      setLoading(false)})
  }, [])


  // This specifies the last index i.e the next page will know the index of the last user
  const indexOfLastUser = currentPage * usersPerPage
  // This specifies the first index i.e the next page will know the index of the first user
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  // This specifies the number of posts on a page
  const currentPost = userData.slice(indexOfFirstUser, indexOfLastUser)
  // This gets the number of users 
  const totalUsers = userData.length
  // Setting state for the pagination
  const paginate = (pageNumbers: number)=> setCurrentPage(pageNumbers)
  
  //The function that handles the toggle of the filter component
  const handleFilter =() =>{
    setFilter(prev => !prev)
  }
  
  //The function that handles the changing state of the search input
  const handleChange = (e: any) =>{
    e.preventDefault()
    setSearchInput(e.target.value)
  }
  
  
  //The function that handles the change of pages to the next on the Pagination component
  const handleNext= () =>{
    setCurrentPage(currentPage + 1)
  }
  
  //The function that handles the change of pages to the previous on the Pagination component
  const handlePrev= () =>{
    setCurrentPage(currentPage - 1)
  }   

  // State for the mobile side navigation
  const[isOpen, setIsOpen] = useState(false)  

  const handleOptions = () =>{
    let ellipsis = document.querySelectorAll('.ellipsis')
    let elements = document.querySelectorAll<HTMLElement>('.hidden--options')
    for(let i = 0; i < ellipsis.length; i++){
      ellipsis[i].addEventListener('click', ()=>{
        for(let j = 0; j < elements.length; j++){
          if(i === j){
            elements[j].style.display = 'block'
          }
          else{
            elements[j].style.display = 'none'
          }
        }
      })
    }
  }

  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <Navbar searchInput={searchInput} handleChange={handleChange} handleNav={() => setIsOpen(prev => !prev)}/>
      <section className='dashboard'>
        {isOpen && <SideNavMobile/>}
        <SideNav/>
        <main className='dashboard--details'>
          <h2>Users</h2>
          <section className='mobile-search'>
            <div className="search-div search-div-mobile">
                  <input type="text" 
                  placeholder="Search for anything..." 
                  className="search-bar"
                  onChange={handleChange}
                  value={searchInput}
                  />
                  <button className="search-btn">
                      <img src="/Image/search.svg" alt="" />
                  </button>
              </div>
          </section>
          <Numbers totalUsers={totalUsers}/>
          <section className='table--details'>
            <div className='table'>
            <table>
              <tr className='first-row'>
                <th>
                  <div className='table--header'>
                    <p>Organization</p>
                    <img src="Image/filter.svg" alt="" className='filter' onClick={handleFilter}/>
                  </div>
                </th>
                <th>
                  <div className='table--header'>
                    <p>username</p>
                    <img src="Image/filter.svg" alt="" className='filter' onClick={handleFilter}/>
                  </div>
                </th>
                <th>
                  <div className="table--header">
                    <p>email</p>
                    <img src="Image/filter.svg" alt="" className='filter' onClick={handleFilter}/>
                  </div>
                </th>
                <th>
                  <div className="table--header">
                    <p>phone number</p>
                    <img src="Image/filter.svg" alt="" className='filter' onClick={handleFilter}/>
                  </div>
                </th>
                <th>
                  <div className='table--header'>
                    <p>date joined</p>
                    <img src="Image/filter.svg" alt="" className='filter' onClick={handleFilter} />
                  </div>
                </th>
                <th>
                  <div className='table--header'>
                    <p>status</p>
                    <img src="Image/filter.svg" alt="" className='filter' onClick={handleFilter} />
                  </div>
                </th>
              </tr>
              <Filter filter={filter}/>
              {/* Filtering the data from the API according to the search input and current post */}
              {currentPost.filter(user =>{
                if(searchInput === ""){
                  return user
                }
                else if(user?.email?.toLowerCase().includes(searchInput.toLowerCase())){
                  return user
                }
                {/* Mapping the data from the API according to the filter */}
              }).map((item) =>(
                <tr key={item.id}>
                    <td>{item.orgName}</td>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <p className='status--td pending'>Pending</p>
                      </td>
                    <td className='ellipsis-div'>
                      <img src="Image/ellipsis.svg" alt="" className='ellipsis' onClick={handleOptions}/>
                    </td>
                      <ul className='hidden--options'>
                        {/* This link changes the pages to show the detail of each user */}
                      <Link to ={`/${item.id}`}>
                        <li className='view--details'>
                        <img src="Image/view.svg" alt="" className='icon' style={{"width": "20px", "verticalAlign": "middle", marginRight: "8px"}}/>
                        View Details</li>
                        </Link>
                      <li>
                        <img src="Image/SideNav/karma.svg" alt="" className='icon' style={{"width": "20px", "verticalAlign": "middle", marginRight: "8px"}} />
                        Blacklist User
                      </li>
                      <li>
                        <img src="Image/SideNav/whitelist.svg" alt="" className='icon' style={{"width": "20px", "verticalAlign": "middle", marginRight: "8px"}} />
                        Activate User</li>
                    </ul>
                  </tr>
              ))}
            </table>
              <Pagination usersPerPage={usersPerPage} totalUsers={totalUsers} paginate={paginate} handleNext={handleNext} currentPage={currentPage} handlePrev={handlePrev}/>
              </div>
          </section>
        </main>
      </section>
    </div>
  )
}
