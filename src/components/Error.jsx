import React from 'react';

const Error = ({show, message}) => {
    if(!show) return null;

    return ( 
        <div class="card-panel red center-align">{message}</div>
     );
}
 
export default Error;