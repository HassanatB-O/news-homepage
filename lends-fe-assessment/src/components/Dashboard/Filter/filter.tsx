import './filter.scss'

// Adding the filter state from the Dashboard so that on click of the ellipsis the filter div shows
type clickProps ={
    filter: any
}

export default function Filter(props: clickProps){
    return(
        <div className={props.filter ? 'show filter--options': 'hidden'}>
            <label htmlFor="organization">Organization</label>
            <br />
            <select name="Org" id="">
                <option value="Org">Organization</option>
            </select>
            <br />
            <label htmlFor="user">User</label>
            <br />
            <input type="text" name='user' placeholder='User' className='input'/>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name='email' placeholder='Email' className='input'/>
            <br />
            <label htmlFor="date">Date</label>
            <br />
            <input type="date" name='date' placeholder='Date' className='input'/>
            <br />
            <label htmlFor="number">Phone Number</label>
            <br />
            <input type="text" name='number' placeholder='Phone Number' className='input'/>
            <br />
            <label htmlFor="status">Status</label>
            <br />
            <input type="text" name='status' placeholder='Status' className='input'/>
            <br />
            <button className='reset-btn'>Reset</button>
            <button className='filter-btn'>Filter</button>
        </div>
    )
}