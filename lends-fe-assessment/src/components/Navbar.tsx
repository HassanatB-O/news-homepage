type searchProps ={
    handleChange:any 
    searchInput: any
    handleNav: any
}

export default function Navbar(props: searchProps){    
    return(
        <nav>
            <div className="logo">
                <div>
                    <img src="/Image/Union.svg" alt="a blue color rectangular shaped logo with semblance to capital letter U"/>
                </div>
                <div>
                    <img src="/Image/lendsqr.svg" alt="the lendsqr logo spelt out" style={{"marginLeft": "10px"}}/>
                </div>
            </div>
            <div className="hamburger-div" onClick={props.handleNav}> 
                <img src="/Image/hamburger.svg" alt="" className="icon no-filter" id='hamburger-menu'/>
            </div>
            <div className="search-div">
                <input type="text" 
                placeholder="Search for anything..." 
                className="search-bar"
                onChange={props.handleChange}
                value={props.searchInput}
                />
                <button className="search-btn">
                    <img src="/Image/search.svg" alt="" />
                </button>
            </div>
            <div className="nav--end">
                <p style={{"textDecoration": "underline", "cursor": "pointer"}}>Docs</p>
                <div className="mobile">
                    <img src="/Image/notification.svg" alt="" />
                </div>
                <div className="mobile">
                    <img src="/Image/image.svg" alt="" className="profile-img" />
                </div>
                <p className="mobile">Adedeji</p>
                <div className="mobile">
                    <img src="/Image/down-arrow.svg" alt="" />
                </div>
            </div>
        </nav>
    )
}