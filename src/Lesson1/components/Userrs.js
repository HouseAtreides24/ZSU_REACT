import React, {useEffect, useState} from 'react';
import User from "./User";

const Userrs = () => {

    let [users,setUsers] = useState([])

    new useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then( response=>response.json())
                .then(newUser=>{
                    setUsers(newUser)
                })
    },[])

    // let users = [
    //     {name:"VAsya",age: 32,surname:"Kuziv"},
    //     {name:"Vova",age:31,surname:"Shkromyda"},
    //     {name:"Ira",age:29,surname: "Barchuk"},
    //     {name: "Igor",surname: "Nayda",age: 21}
    // ]

    return (
        <div>
            {
                users.map(value => <User key={value.id} note={value}/>)
            }
        </div>
    );
};

export default Userrs;