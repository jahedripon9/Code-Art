import React from 'react';
import 'animate.css';

const About = () => {
    return (
        <div id='about' className='lg:my-10 my-10 bg-slate-200  lg:mx-12 mx-10 rounded-lg'>
            <div className='mt-5'>
                <h1 className='py-3'>WHO AM I</h1>
                <h1 className='text-5xl font-bold'>ABOUT</h1> 
                
            </div>
            <section class="text-gray-600 body-font mx-12">
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-72 md:w-1/2 w-4/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded-lg" alt="hero" src="https://i.ibb.co/zhRQH8q/Jahad-Master.jpg"/>
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 lg:ml-10 animate__zoomIn">Jahed Ahmed Ripon   
                    </h1>
                    
                    <p class="mb-4 leading-relaxed text-lg mx-12">I'm a Freelancer Front-End Developer with over 2 years of experience. I'm from Sylhet, Bangladesh. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.</p>
                     <a className=' lg:ml-8' target='_blank' href="https://jahedportfolio.netlify.app/"><button type="button" class="py-2 px-4   mx-1  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-34 transition ease-in duration-100 text-center text-xm font-bold  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full my-2"> My Portfolio</button></a>
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 lg:ml-10">Skills   
                    </h1>
                    <div class="flex justify-center lg:mx-10 md:mx-52">
                    
                    <button type="button" class="py-1 px-3 mx-1  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-100 text-center text-xm font-bold  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full my-2"> HTML5</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full my-2"> CSS3 </button> 
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full my-2"> JAVASCRIPT</button>
                    
                    </div> 
                    <div className='lg:mx-10 md:mx-48'> 
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full my-2"> BOOTSTRAP</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full my-2"> Tailwind CSS</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full my-2"> Material Ui</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  my-2"> REACT JS</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  my-2"> MongoDB</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  my-2"> Firebase</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  my-2"> Git</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  my-2"> Chrome Dev Tool</button>
                    <button type="button" class="py-1 px-3 mx-1 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-34 transition ease-in duration-200 text-center text-xm font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full  my-2"> VS Code</button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;