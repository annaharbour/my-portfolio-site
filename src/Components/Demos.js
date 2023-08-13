// import React, { Component } from 'react';

// class Demos extends Component {
//     render() {
//         return (
//             <div className='segment'>
//                 <h1>Demos</h1>
//                 <video controls width="640" height="360">
//         <source src="images/PonyClubDemo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//                 <br></br>
//                 <div className='about'>                   
//                     <div className='bio'>
                        
//                         <h2>Assignment Application</h2>
//                         <p>Developed for an equestrian club to allow volunteers to sign up to work various positions.
                        
//                         <br></br>
//                         <br></br>

//                         <i className='testimonials'>"This will save our team many hours we have previously had to spend emailing and calling potential volunteers."</i>
//                         <br></br> 
//                         - Sandra Wright
                        
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Demos;

import React, { Component } from 'react';

class Demos extends Component {
    render() {
        return (
            <div className='segment'>
                <h1>Demo</h1>
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
                            <p>Developed for an equestrian club to allow volunteers to sign up for various positions.</p>
                            <br /> 
                                <p className='testimonials'>"This will save our team many hours we have previously had to spend emailing and calling potential volunteers."</p>
                            
                                - Sandra Wright, Regional Supervisor, United States Pony Club
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demos;
