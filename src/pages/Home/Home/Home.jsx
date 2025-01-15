import React from 'react';
import Banner from '../Banner';
import SwiperSlider from '../SwiperSlider';
import PopularMenu from '../PopularMenu';
import Featured from '../Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SwiperSlider></SwiperSlider>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;