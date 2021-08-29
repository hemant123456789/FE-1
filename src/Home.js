import React, {useEffect, useState} from 'react'
import "./Home.css"
import axiosConfig from '../src/axiosConfig';

// For fetching data
import axios from 'axios'

import Card from './Card';

const Home = () => {

    const [users, setUsers] = useState()

    useEffect(()=>{
        axiosConfig.get('/users/read')
        .then(res => {
            setUsers(res.data)
        })
    },[])


    console.log(users)

    return (
        <div>
            <div className="container">
                {users && users.map(user => (
                    <Card type="card" key={user._id} 
                    user={user} allusers={users} 
                    setUsers={setUsers}/>
                ))}
                
                <Card type="add" setUsers={setUsers}/>
            </div>
        </div>
    )
}

export default Home
