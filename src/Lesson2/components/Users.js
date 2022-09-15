import React, {useEffect, useState} from "react";
import User from './User'
import Details from './Details'

const Users = () => {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
                .then( response=>response.json())
                .then(user=> setUsers(user))
    },[])

    const getUserId = (id)=>{
            fetch('https://jsonplaceholder.typicode.com/users/'+id)
                .then( response=>response.json())
                .then(user=> setUser(user))
    }


    return (
            <div className='flex-parent-element'>
                <div className='flex-child-element'>
                    {
                        users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)
                    }
                </div>
                <div className='flex-child-element'>
                    <Details/>
                </div>
            </div>

    );
};

export default Users;