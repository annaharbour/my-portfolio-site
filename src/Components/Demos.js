import React, { Component } from 'react';

class Demos extends Component {
    render() {
        return (
            <div className='demos'>
                <h1>Demos</h1>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/PonyClubDemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Assignment Application</h2>
                            <p>
                            A robust web application built on the MERN (MongoDB, Express.js, React, Redux, Node.js) stack, tailored specifically for the needs of an equestrian club. This comprehensive solution streamlines volunteer management, facilitates communication, and enhances user engagement within the club. 
                            </p>
                            <ul>
                                <li>Volunteers can sign up, providing necessary information and specifying their roles of interest with ability to remove themselves from roles if their availability changes.</li>
                                <li>User profiles include contact information for seamless communication. </li>
                                <li>The application includes a dedicated forum where users can ask questions, share information, and engage in discussions related to equestrian activities.</li>
                                <li>Each user has a profile that showcases their roles within the club, contact information, and any additional relevant details.</li>
                                <li>The MongoDB database stores user information, forum posts, and other relevant data.</li>
                            </ul>
                            
                            <br /> 
                                <p className='testimonials'>"This will save our team many hours we have previously had to spend emailing and calling potential volunteers."</p>
                            
                                - Sandra Wright, Regional Supervisor, United States Pony Club
                            
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/travel-blog-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>
                                Travel Blog 
                                <a className="demo-link" href='https://annas-adventures.netlify.app/' target='_blank' rel="noreferrer">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                                </h2>
                            <p>
                                One of the key features of this application is the search and filter functionality, allowing users to easily find specific articles of interest using input keywords to locate relevant content. The React Router ensures smooth navigation between different sections of the app, creating a single-page application feel without the need for page reloads.
                            </p>        
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/beautyhackerdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Beauty Blog</h2>
                            <p>This beauty blog seamlessly integrates Umbraco for content management, HTML/CSS for a visually appealing and responsive design, and C# for server-side logic, enabling features like interlinked blog posts, contact forms, and newsletter subscriptions. This combination creates a robust and interactive platform for beauty enthusiasts to explore and engage with content.</p>        
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/advent-calendar-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>
                                Advent Calendar 
                                <a className="demo-link" href='https://autumnal-advent-calendar.netlify.app/' target='_blank' rel="noreferrer">
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                                </h2>
                            <p>The calendar is divided into individual cards for each day from September 1st to December 25th. The cards display unique images and fun local activities with a flip animation to reveal the activity. Styles using HTML, CSS, JavaScript, and JSX are applied to create an attractive and responsive design, including animations for card flipping. are implemented using React components to create an engaging and visually appealing experience for users.
                            </p>        
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/moviedemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Movie Search</h2>
                            <p>A movie browsing site that seamlessly delivers a visually appealing and user-friendly experience. Leveraging a movie API, this platform allows users to explore an extensive collection of movies with ease. The homepage welcomes visitors with a grid of curated movie posters, enticing them to discover new cinematic gems. Each movie poster serves as a clickable gateway, triggering dynamic JavaScript requests to the API for detailed information.</p>        
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/flashcarddemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>React Flashcards</h2>
                            <p>Responsive flashcards designed for learning React terminology, crafted with React, HTML, and CSS. These interactive cards seamlessly adapt to various screen sizes, offering a user-friendly experience on both desktop and mobile devices.</p>        
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/videoplayerdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Youtube Copycat</h2>
                            <p>This video player, built with React components and leveraging the Youtube API, supports seamless playback and includes features such as play, pause, volume control, and a progress bar. The sidebar incorporates React-driven functionality for recommended videos. Material UI styling ensures a visually engaging interface, and JavaScript enhances interactivity, providing a smooth and immersive browsing experience reminiscent of the popular video-sharing platform.</p>        
                        </div>
                    </div>
                </div>   

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/redditcopycatdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Reddit Copycat</h2>
                            <p>Reddit copycat built with React, JavaScript, HTML, and CSS, leveraging the power of the Reddit API to recreate the iconic discussion platform. </p>        
                        </div>
                    </div>
                </div>  

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/expensetrackerdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Expense Tracker</h2>
                            <p>Efficient expense tracker designed with JavaScript, HTML, and CSS to help users manage their finances seamlessly. The user interface, created with HTML and styled using CSS, provides a clean and intuitive design. Users can input their expenses and income through a simple form, with JavaScript handling the logic behind expense calculations and updating the display in real-time. Each entry is categorized and displayed in a list.</p>        
                        </div>
                    </div>
                </div>       

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/BoBurnhamdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Welcome to the Internet</h2>
                            <p>Ode to Bo Burnham's song "Welcome to the Internet" Made Using JS/HTML/CSS</p>        
                        </div>
                    </div>
                </div>    

                 <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/instagramdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Instagram Copycat</h2>
                            <p>Instagram copycat user interface crafted with HTML and CSS, replicating the visually appealing design of the popular photo-sharing platform. The layout consists of a responsive grid displaying user posts with square thumbnails</p>        
                        </div>
                    </div>
                </div>       

                  <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/recipeblogdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Recipe Blog</h2>
                            <p>Vibrant and responsive recipe blog page designed with HTML and CSS. The layout features a visually appealing images, featured ingredients with nutritional benefits, and step-by-step instructions. The use of responsive design ensures an optimal viewing experience across various devices, seamlessly adapting the layout for both desktop and mobile users.</p>        
                        </div>
                    </div>
                </div>             

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/tiktokdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Clock / Dark Mode Demo</h2>
                            <p>Responsive clock created using HTML, CSS, and JavaScript, capable of smoothly transitioning between dark and light modes.</p>        
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/drawingdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Sketchpad</h2>
                            <p>Graphical interface where users can draw with responsive thickness and color using their mouse. </p>        
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/colorboxdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Color boxes</h2>
                            <p>Create boxes of random colors as you wave your mouse across the gameboard. Made using JS/HTML/CSS</p>        
                        </div>
                    </div>
                </div>

   
                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/quotedemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Random Quote Generator</h2>
                            <p>Dynamic and interactive random quote generator designed using HTML, CSS, and JavaScript that asyncronously fetches quotes from an API. Users can filter by author and keywords.</p>        
                        </div>
                    </div>
                </div>

                
                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/imagesearchdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Image Search</h2>
                            <p>image search application created with React, JavaScript, HTML, and CSS, designed to seamlessly fetch and display results from an image API. The application provides users with a visually intuitive interface where they can input search queries, and the system dynamically fetches and showcases relevant images. The HTML structure lays out a search bar and a responsive grid to display the search results.</p>        
                        </div>
                    </div>
                </div>           

                <div className='content-container'>
                    <div className='video-container'>
                        <video controls width="100%" height="auto">
                            <source src="images/basiccomponentdemo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='text-container'>
                        <div className='demo-description'>
                            <h2>Basic Components</h2>
                            <p>This application features a navigation bar, an accordion dropdown, and a translator component made using React, JavaScript, HTML, CSS, and the Google Language API</p>        
                        </div>
                    </div>
                </div>     
               

            </div>
        );
    }
}

export default Demos;
