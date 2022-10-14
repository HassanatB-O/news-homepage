import './sidenav.scss'

export default function SideNav(){
    
    return(
        <div className='side--nav'  id='desktop-sidenav'>
           <aside className='side--div' style={{"margin": "1.5em 0", "fontWeight": 600,
    "opacity": 1}}>
                <div>
                    <img src="Image/SideNav/switch.svg" className="icon"/>
                </div>
                <p>Switch Organization</p>
                <div>
                    <img src="Image/SideNav/dropdown.svg"  style={{"marginLeft": "1em"}}/>
                </div>
           </aside>
           <aside className='side--div' style={{"margin": "2em 0"}}>
                <div>
                    <img src='Image/SideNav/dashboard.svg' className='icon'/>
                </div>
                <p>dashboard</p>
           </aside>
           <p className='section--divider'>CUSTOMERS</p>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/users.svg' className='icon'/>
                </div>
                <p>users</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/guarantors.svg' className='icon'/>
                </div>
                <p>guarantors</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/loan.svg' className='icon no-filter'/>
                </div>
                <p>loans</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/decision.svg' className='icon no-filter'/>
                </div>
                <p>decision models</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/savings.svg' className='icon'/>
                </div>
                <p>savings</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/loan-request.svg' className='icon'/>
                </div>
                <p>loan requests</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/whitelist.svg' className='icon'/>
                </div>
                <p>whitelist</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/karma.svg' className='icon'/>
                </div>
                <p>karma</p>
           </aside>
           <p className='section--divider'>BUSINESSES</p>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/switch.svg' className='icon'/>
                </div>
                <p>Organization</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/loan-request.svg' className='icon'/>
                </div>
                <p>loan products</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/products.svg' className='icon'/>
                </div>
                <p>savings products</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/charges.svg' className='icon no-filter'/>
                </div>
                <p>fees and charges</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/transaction.svg' className='icon'/>
                </div>
                <p>transactions</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/services.svg' className='icon no-filter'/>
                </div>
                <p>services</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/service-account.svg' className='icon'/>
                </div>
                <p>service account</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/settlements.svg' className='icon'/>
                </div>
                <p>settlements</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/reports.svg' className='icon'/>
                </div>
                <p>reports</p>
           </aside>
           <p className='section--divider'>SETTINGS</p>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/preferences.svg' className='icon'/>
                </div>
                <p>preferences</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/fees.svg' className='icon no-filter'/>
                </div>
                <p>fees and pricing</p>
           </aside>
           <aside className='side--div'>
                <div>
                    <img src='Image/SideNav/audit.svg' className='icon'/>
                </div>
                <p>audit logs</p>
           </aside>
        </div>
    )
}