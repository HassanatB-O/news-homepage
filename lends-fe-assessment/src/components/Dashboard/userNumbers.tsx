type userNumber ={
  totalUsers: number
}

export default function Numbers(props: userNumber){
    return(
        <section className="user--details">
            <div className="box">
              <div className='img-div' style={{"backgroundColor": "rgba(223, 24, 255, 0.1)"}}>
                <img src="/Image/SideNav/users.svg" alt="" className='icon pink-filter'/>
              </div>
              <p>users</p>
              <h2>{props.totalUsers}</h2>
            </div>
            <div className="box">
              <div className='img-div' style={{"backgroundColor": "rgba(87, 24, 255, 0.1)"}}>
                <img src="/Image/SideNav/guarantors.svg" alt="" className='icon purple-filter'/>
              </div>
              <p>active users</p>
              <h2>{props.totalUsers}</h2>
            </div>
            <div className="box">
              <div className='img-div' style={{"backgroundColor": "rgba(245, 95, 68, 0.1)"}}>
                <img src="/Image/SideNav/settlements.svg" alt="" className='icon  orange-filter'/>
              </div>
              <p>users with loans</p>
              <h2>12,456</h2>
            </div>
            <div className="box">
              <div className='img-div' style={{"backgroundColor": "rgba(255, 51, 102, 0.1)"}}>
                <img src="/Image/SideNav/fees.svg" alt="" className='icon red-filter'/>
              </div>
              <p>users with savings</p>
              <h2>102,456</h2>
            </div>
          </section>
    )
}