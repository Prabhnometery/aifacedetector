import React from 'react';

import Particles from 'react-particles-js';
 
const BackgroundParticle = () => {
  
        return (
            <Particles 
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} />
        );
    };

export default BackgroundParticle;