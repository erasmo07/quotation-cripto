import React from 'react';
import PropTypes from 'prop-types';

const Error = ({show, message}) => {
    if(!show) return null;

    return ( 
        <div class="card-panel red center-align">{message}</div>
     );
}

Error.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
}
 
export default Error;