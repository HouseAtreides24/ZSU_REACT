import React from 'react';

const User = ({user:{id,name,username,email},getUserId}) => {


    return (
        <div className='flexSecond-parent-element'>
            <div className='flexSecond-child-element'>
                {id}----{name}-----{username}----{email}
            </div>
            <div className='flexSecond-child-element'>
                <button className='btn1' onClick={() => {
                    getUserId(id)
                }}>USER_ID={id}</button>
            </div>
        </div>
    );
};

export default User;