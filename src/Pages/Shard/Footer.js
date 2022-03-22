import React from 'react';

const Footer = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto flex flex-wrap flex-col">
                    
                    <img class="xl:w-24 lg:w-24 md:w-24 w-28 block mx-auto mb-5 object-cover object-center rounded" alt="hero" src="https://i.ibb.co/R25X81k/icon-1.png"/>
                    <div class="flex flex-col text-center w-full">
                    <h1 class="text-xl font-medium title-font mb-2 text-gray-900">ALL RIGHTS RESERVED <br /> <span className='text-indigo-900'>Jahed Ahmed Ripon</span></h1>
                    <h1 class="text-5xl font-sm title-font mb-2 text-gray-900">C O D E  <span className='ml-8'>A R T</span></h1>
                    
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;