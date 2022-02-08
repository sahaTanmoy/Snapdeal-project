import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';

// import '../styles/app.css';

// import watchImg from '../images/wristwatch_1200.jpg';

function Demo() {
    
        return (
            <div>
            {/* <div className="fluid">
                <div className="fluid__image-container"> */}
                    
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                                width: 300,
                                height: 450
                            },
                            largeImage: {
                                src: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                                width: 1200,
                                height: 1800
                            },
                            isHintEnabled: true,
                            enlargedImageContainerDimensions: {
                                width: '140%',
                                height: '100%'
                            },
                            shouldUsePositiveSpaceLens: true
                        }} />
                {/* </div>
                
            </div> */}
            </div>
        );
}

export default Demo; 