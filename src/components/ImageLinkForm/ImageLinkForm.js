import React from 'react';

import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
    return (
        <div>
            <p className='f3'>
                {'This magic brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'> 
                <div className='pa4 form center br3 shadow-5'>
                    <input onChange={props.onInputChange} className='f4 pa2 w-70 center' type='text' />
                    <button onClick={props.onSubmit} className='pointer w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>


        </div>
    )
};

export default ImageLinkForm;


