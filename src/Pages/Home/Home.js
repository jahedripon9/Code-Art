import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Portfolio from '../Portfolio/Portfolio';
// import Header from '../Shard/Header'

const Home = () => {
    return (
        <div className=''>
            {/* <Header></Header> */}
            <img className='w-full h-96 rounded-2xl ' src="https://i.ibb.co/d4tYwp0/image.png" alt="" />
            <Portfolio></Portfolio>
            <Blog></Blog>
            <About></About>
        </div>
    );
};

export default Home;