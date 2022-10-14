import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div className="Home">
            <div className="container">
                <div className="logo">
                    <div>
                        <img src="/Image/Union.svg" alt="a blue color rectangular shaped logo with semblance to capital letter U"/>
                    </div>
                    <div>
                        <img src="/Image/lendsqr.svg" alt="the lendsqr logo spelt out" style={{"marginLeft": "10px"}}/>
                    </div>
                </div>
                <section className="sign-in">
                    <div className="img-iv">
                        <img src="/Image/sign-in.svg" alt="illustration of a person wearing a multi-colored outfit entering a door with a blue frame, on the other side are different colored shapes" className="sign-in-img"/>
                    </div>
                    <div className="text-div">
                        <h1>Welcome!</h1>
                        <p className='info'>Enter details to login</p>
                        <input type="email" placeholder="Email"/>
                        <br />
                        <input type="password" placeholder="Password"/>
                        <h3>forgot password?</h3>
                        <Link to="/dashboard"><button className='log-in-btn'>log in</button></Link>
                    </div>
                </section>
            </div>
        </div>
    )
}