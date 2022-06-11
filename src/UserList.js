import React,{useEffect,useState} from 'react'
import axios from 'axios'
import User from './User.js';

function UserList({}) {
    const [listOfUSer,setlistOfUSer]=useState([]);
    
   useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(res =>{setlistOfUSer(res.data ) })
        .catch(err=> {console.log(err)})

}, []);

        return (
            <div>
                {
                    listOfUSer.map((user, index) => <User user={user} key={index} />)
                }
            </div>
        )
    
}

export default UserList;