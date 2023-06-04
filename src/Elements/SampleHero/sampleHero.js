import React,{useState} from 'react'
import "./sampleHero.css"

const images = [
  {
    label: 'A SINGH',
    imgPath:
      'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.',
  },
  {
    label: 'B SINGH',
    imgPath:
      'https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'B IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.',
  },
  {
    label: 'C SINGH',
    imgPath:
      'https://images.pexels.com/photos/3438086/pexels-photo-3438086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'C IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.',
  },
  {
    label: 'D SINGH',
    imgPath:
      'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'D IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.',
  },
  {
    label: 'E SINGH',
    imgPath:
      'https://images.pexels.com/photos/3442578/pexels-photo-3442578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'E IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.',
  },
];
const SampleHero = () => {

  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  return (
    <div className='sampleHero'>
      <div className='arrowLeft' onCLick={handleBack}></div>
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
          <div className='card5' id='5'>
            <div className='photo'></div>
            <div className='name'>ABC SINGH</div>
            <div className='text'>IAS officer ABC SINGH is one of the most popular</div>
          </div>
        </div>

        <div className='marginBelow1'></div>
        <div className='marginBelow2'></div>

      </div>
      <div className='arrowRight' onCLick={handleNext}></div>
    </div>
  )
}

export default SampleHero
