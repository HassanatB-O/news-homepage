import React from 'react'
import New from './New'

export default function GridOne() {
  return (
    <div className='grid--one'>
        <section>
            <div>
                <img src='Image/image-web-3-desktop.jpg' alt='colorful blocks and grids' className='img--desktop'/>
                <img src='Image/image-web-3-mobile.jpg' alt='colorful blocks and grids' className='img--mobile'/>
            </div>
            <section className='container'>
                <h1>The Bright Future of Web 3.0?</h1>
                <div>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>Read More</button>
                </div>
            </section>
        </section>
        <New/>
    </div>
  )
}
