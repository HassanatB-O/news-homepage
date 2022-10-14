import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import SideNav from '../../SideNav/SideNav'
import Navbar from '../../Navbar'
import { User } from '../../models/user'
import './details.scss'
import SideNavMobile from '../../SideNav/sidenavMobile'


export default function Details(){
    const [userDetails, setUserDetails] = useState<User>(() =>{
        const localData = localStorage.getItem('userDetails')
        return localData ? JSON.parse(localData) : []
    })
    const[loading, setLoading] = useState(false)
    const {id} = useParams()

    // Fetching the data from the API according to the Id of each user
    const fetchUserData = () =>{
        fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
        .then(res => res.json())
        .then(data =>{ 
            setUserDetails(data)
            setLoading(false)})
    }

    useEffect(() =>{
        // For storing data in local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails))
        fetchUserData()
    }, [id, userDetails])

    const[isOpen, setIsOpen] = useState(false)
     
    return(
        <div className='details'>
            <Navbar handleChange={userDetails?.handleChange} searchInput={userDetails?.searchInput} handleNav={() => setIsOpen(prev => !prev)}/>
            <section className='dashboard'>
            {isOpen && <SideNavMobile/>}
            <SideNav/>
                <div className='dashboard--details'>
                    {/* This button links back to the users */}
                    <Link to="/dashboard">
                        <button className='back-btn'>
                            <span style={{"marginRight": "10px", "fontSize": "2rem"}}>&larr;</span>
                            Back to Users
                        </button>
                    </Link>
                        <h2>User Details</h2>    
                        <div className='buttons'>
                            <button className='black-btn'>blacklist user</button>
                            <button className='active-btn'>activate users</button>
                        </div>
                    <section className='profile--section'>
                        <div className='profile--details'>
                            <div className='profile'>
                                <div>
                                    <img src={userDetails?.profile?.avatar} alt="avatar of the user" className='avatar'/> 
                                </div>
                                <div className='name--id'>
                                    <h4>{userDetails?.profile?.firstName} {userDetails?.profile?.lastName}</h4>
                                    <p>{userDetails?.id}</p>
                                </div>
                                <div style={{"padding": "0 1.5rem"}}>
                                    <p>User Tier</p>
                                </div>
                                <div className='bank--details'>
                                    <h4>{userDetails?.accountBalance}</h4>
                                    <p>{userDetails?.profile?.bvn}/Bank</p>
                                </div>
                            </div>
                            <div className='section-slct'>
                                <p>General Information</p>
                                <p>Documents</p>
                                <p>Bank Details</p>
                                <p>Loans</p>
                                <p>Savings</p>
                                <p>App and System</p>
                            </div>
                        </div>
                    </section>
                    <section className='profile--section'>
                        <div className="profile--details">
                            <h4>Personal Details</h4>
                            <div className="grid">
                                <aside>
                                    {/* The question mark checks if the value is undefined or not sort of like a condition*/}
                                    <h3 style={{"color": "#545F7D"}}>full name</h3>
                                    <p>{userDetails?.profile?.firstName} {userDetails?.profile?.lastName}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>phone number</h3>
                                    <p>{userDetails?.profile?.phoneNumber}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>email address</h3>
                                    <p>{userDetails?.email}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>bvn</h3>
                                    <p>{userDetails?.profile?.bvn}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>gender</h3>
                                    <p>{userDetails?.profile?.gender}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>marital status</h3>
                                    <p>Unknown</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>children</h3>
                                    <p>Unknown</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>type of residence</h3>
                                    <p>{userDetails?.profile?.address}</p>
                                </aside>
                            </div>
                            <h4>Education and Employment</h4>
                            <div className="grid">
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>level of Education</h3>
                                    <p>{userDetails?.education?.level}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>Employment status</h3>
                                    <p>{userDetails?.education?.employmentStatus}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>sector of Employment</h3>
                                    <p>{userDetails?.education?.sector}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>duration of Employment</h3>
                                    <p>{userDetails?.education?.duration}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>office email</h3>
                                    <p>{userDetails?.education?.officeEmail}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>monthly income</h3>
                                    <p>{userDetails?.education?.monthlyIncome[0]} - {userDetails?.education?.monthlyIncome[1]}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>loan repayment</h3>
                                    <p>{userDetails?.education?.loanRepayment}</p>
                                </aside>
                            </div>
                            <h4>Socials</h4>
                            <div className="grid">
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>twitter</h3>
                                    <p>{userDetails?.socials?.twitter}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>facebook</h3>
                                    <p>{userDetails?.socials?.facebook}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>instagram</h3>
                                    <p>{userDetails?.socials?.instagram}</p>
                                </aside>
                            </div>
                            <h4>Guarantor</h4>
                            <div className="grid">
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>full name</h3>
                                    <p>{userDetails?.guarantor?.firstName} {userDetails?.guarantor?.lastName}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>phone number</h3>
                                    <p>{userDetails?.guarantor?.phoneNumber}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>address</h3>
                                    <p>{userDetails?.guarantor?.address}</p>
                                </aside>
                                <aside>
                                    <h3 style={{"color": "#545F7D"}}>relationship</h3>
                                    <p>{userDetails?.guarantor?.gender}</p>
                                </aside>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}