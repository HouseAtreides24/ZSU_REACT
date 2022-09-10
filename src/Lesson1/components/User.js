import React from 'react';

const User = ({note: {name,username, email}} ) => {
    return (
        <div className='ship'>
            <div>{name}----{username}---{email}</div>
        </div>
    );
};

export default User;