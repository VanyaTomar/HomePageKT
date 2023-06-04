import React from 'react'
import "./heroSection.css"

const heroSection = () => {

  // const index=0;

  return (
    <div className='hero'>
      <div className='arrowLeft'></div>
      <div className='heroMain'>
        <h1>OUR HEROES</h1>
        {/* <div className='margin'></div> */}

        <div className='heroCard'>
          <div className='card1' id='1' >
            <div className='photo'></div>
            <div className='name'>ABC SINGH</div>
            <div className='text'>IAS officer ABC SINGH is one of the most popular</div>
          </div>
          <div className='card2' id='2'>
            <div className='photo'></div>
            <div className='name'>ABC SINGH</div>
            <div className='text'>IAS officer ABC SINGH is one of the most popular officers of the IAS in the country.</div>
          </div>
          <div className='card3' id='3'>
            <div className='photo'></div>
            <div className='name'>ABC SINGH</div>
            <div className='text'>
              IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.All thanks to the recent controversy involving the Pakistani Hindu migrants in Jaisalmer.
            </div>
          </div>
          <div className='card4' id='4'>
            <div className='photo'></div>
            <div className='name'>ABC SINGH</div>
            <div className='text'>IAS officer ABC SINGH is one of the most popular officers of the IAS in the country</div>
          </div>
          <div className='card5'id='5'>
            <div className='photo'></div>
            <div className='name'>ABC SINGH</div>
            <div className='text'>IAS officer ABC SINGH is one of the most popular</div>
          </div>
        </div>

        <div className='marginBelow1'></div>
        <div className='marginBelow2'></div>

      </div>
      <div className='arrowRight'></div>
    </div>
  )
}

export default heroSection
