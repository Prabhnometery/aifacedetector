import React from 'react';


const Rank = (props) => {
    return (
        <div>
            <p className='white f3'>
               {`${props.name} you current entry count is ...`}
            </p>
            <div className='white f3'>
                {'#' + props.entries}
            </div>
        </div>
    )
};

export default Rank;
