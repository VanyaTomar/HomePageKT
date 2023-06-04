import React from 'react';
import './donation.css';
const Donation = () => {
  return (
    <div className='donationContainer'>
      <h1>DONATION</h1>
      <div className='box'>
        <div className='text'>
          <h1>No act of kindness,<br/> no matter how small,<br/> is ever wasted</h1>
          <p>Help support our cause and make a difference today! Your donation can go a long way in helping us achieve our mission.These contributions aid in creating a cleaner environment, reducing waste's negative effects, and promoting a sustainable future for all.</p>
          <button> DONATE NOW</button>
        </div>
        <div className='borderr'>
          <div className='immg'></div>
        </div>
      </div>
    </div>
  )
}

export default Donation
