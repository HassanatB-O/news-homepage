import React from 'react'

export default function GridTwo() {
  return (
    <div className='grid--two'>
        <section className='container--items'>
            <div>
                <img src='Image/image-retro-pcs.jpg' alt=''/>
            </div>
            <div className='text'>
                <h3>01</h3>
                <h4>Reviving Retro PCs</h4>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </section>
        <section className='container--items'>
            <div>
                <img src='Image/image-top-laptops.jpg' alt=''/>
            </div>
            <div className='text'>
                <h3>02</h3>
                <h4>Top 10 Laptops of 2022</h4>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </section>
        <section className='container--items'>
            <div>
                <img  src='Image/image-gaming-growth.jpg' alt=''/>
            </div>
            <div className='text'>
                <h3>03</h3>
                <h4>The Growth of Gaming</h4>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </section>
    </div>
  )
}
