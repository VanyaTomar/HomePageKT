import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./scroll.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

function SwipeableTextMobileStepper() {
  const theme = useTheme();
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
    <div className='scrollContainer'>
      <h1>OUR HEROES</h1>

      <Box sx={{ maxWidth: 400, flexGrow: 1 }} className='scrollBox'>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div className='card_image'>
              <div key={step.label} >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 500,
                      display: 'block',
                      maxWidth: 1000,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
              
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 100,
            pl: 2,
            bgcolor: 'background.default',

          }}
        >
          <Typography>
            {images[activeStep].label}
            <br />
            {images[activeStep].description}
          </Typography>
        </Paper>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>

  );
}

export default SwipeableTextMobileStepper;
