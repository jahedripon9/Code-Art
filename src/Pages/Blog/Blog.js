import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div id='blog' className='lg:mx-12 mx-5 bg-gray-100 py-4 rounded-xl'> 
            <div>
                <h1 className=''>LAST NEWS</h1>
                <h1 className='text-5xl font-bold'>BLOG</h1> 
                
            </div>
            <section class="text-gray-600 body-font ">
            <hr />
                <div class="container px-5 py-10 mx-auto">
                    
                    <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img class="lg:h-auto md:h-20 w-full object-cover object-center" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/portfoliojs.png" alt="blog"/>
                        <div class="p-6">
                            <hr />
                            <h1 class="title-font text-lg font-bold text-gray-900 mb-3 ">Create a Portfolio Website Using HTML, CSS, & JavaScript</h1>
                            <p class="leading-relaxed mb-3">If you are looking for a web developer job it can be helpful to have a portfolio website. It can also be helpful to have projects you've created to show to potential employers. You can accomplish both tasks at once by creating your own portfolio website with HTML, CSS, & JavaScript.

                            

                            </p>
                            <div class="flex items-center flex-wrap ">
                            <a target='_blank' href='https://www.freecodecamp.org/news/create-a-portfolio-website-using-html-css-javascript/' class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                                
                            </a>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/freeCodeCamp-Cover.png" alt="blog"/>
                        <div class="p-6">
                        <hr />  
                            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">React Hooks Fundamentals for Beginners</h1>
                            <p class="leading-relaxed mb-3">React.js is an open-source JavaScript-based user interface library. It is hugely popular for web and mobile app development.

                            React follows the principle of component-based architecture. A component in React is an isolated and reusable piece of code. The components can be of two types – class components and functional components.</p>
                            <div class="flex items-center flex-wrap">
                            <a target='_blank' href='https://www.freecodecamp.org/news/react-hooks-fundamentals/' class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pexels-picjumbocom-196645.jpg" alt="blog"/>
                        <div class="p-6">
                            <hr />
                            <h1 class="title-font text-lg font-bold text-gray-900 mb-3">How to Use Plugins in Figma</h1>
                            <p class="leading-relaxed mb-3">In this article, you'll learn how to install plugins in Figma. You'll also get to know some really cool Figma plugins that every designer and developer should use.

                            Plugins help make your design process easier and smoother. From image assets to embedding maps into your designs, plugins are easy to use and they help you create beautiful, complex designs in less time.</p>
                            <div class="flex items-center flex-wrap ">
                            <a target='_blank' href='https://www.freecodecamp.org/news/plugins-in-figma/' class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                            </span>
                            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;