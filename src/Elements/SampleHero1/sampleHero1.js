import React from 'react';
import "./sampleHero1.css"
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const sampleHero1 = () => {
    return (
        <div className='sampleHero1_container'>
            <h1>OUR HEROES</h1>
            <Splide aria-label="My Favorite Images" className='sampleHero1'
                options={{
                    // rewind: true,
                    // width: 800,
                    perMove: 1,
                    gap: '3rem',
                    perPage: 5,
                    focus: 'center',
                    slideFocus: 0,
                    pagination: false,
                }}>
                <SplideSlide aria-label="FavoriteImage1" className='hero1'>
                    <img src='https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Hero 1" width={300} />
                    <label>A Singh</label>
                    <p>A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.</p>

                </SplideSlide>
                <SplideSlide aria-label="FavoriteImage2" className='hero2'>
                    <img src='https://images.pexels.com/photos/8386164/pexels-photo-8386164.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ' alt="Hero 2" width={300} />
                    <label>B Singh</label>
                    <p>A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.</p>
                </SplideSlide>
                <SplideSlide aria-label="FavoriteImage3" className='hero3' tabindex="0">
                    <img src='https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Hero 5" width={300} />
                    <label>C Singh</label>
                    <p>A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.</p>
                </SplideSlide>
                <SplideSlide aria-label="FavoriteImage4" className='hero4'>
                    <img src='https://images.pexels.com/photos/3438086/pexels-photo-3438086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Hero 3" width={300} />
                    <label>D Singh</label>
                    <p>A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.</p>
                </SplideSlide>
                <SplideSlide aria-label="FavoriteImage5" className='hero5'>
                    <img src='https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Hero 4" width={300} />
                    <label>E Singh</label>
                    <p>A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.</p>
                </SplideSlide>
                <SplideSlide aria-label="FavoriteImage6" className='hero6'>
                    <img src='https://images.pexels.com/photos/4750165/pexels-photo-4750165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Hero 5" width={300} />
                    <label>F Singh</label>
                    <p>A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.</p>
                </SplideSlide>

                <SplideSlide aria-label="FavoriteImage7" className='hero7'>
                    <img src='https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Hero 5" width={300} />
                    <label>G Singh</label>
                    <p>A IAS officer ABC SINGH is one of the most popular officers of the IAS in the country, with a massive social media following.</p>
                </SplideSlide>
            </Splide>
            <div className='marginBottom1'></div>
            <div className='marginBottom2'></div>
        </div>

    )
}

export default sampleHero1
