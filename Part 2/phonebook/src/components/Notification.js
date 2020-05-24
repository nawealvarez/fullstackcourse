import React from 'react';

const Notification = ({ message, isError }) =>{
    const classes = isError ? "error" : "notification";
    return (
        <div className={classes}>
            {message}
        </div>
    )
}

export default Notification;