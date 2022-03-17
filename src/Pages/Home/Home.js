import React from 'react';
import Blog from '../Blog/Blog';
import Portfolio from '../Portfolio/Portfolio';
// import Header from '../Shard/Header'

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <img className='' src="https://i.ibb.co/d4tYwp0/image.png" alt="" />
            <Portfolio></Portfolio>
            <Blog></Blog>
        </div>
    );
};

export default Home;