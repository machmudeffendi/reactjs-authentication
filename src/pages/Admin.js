import React from 'react';
import { useAuth } from '../context/auth';
import axios from 'axios';

export default function Admin(props){
    const { authTokens, setAuthTokens } = useAuth();

    function logOut(){
        axios.post('http://localhost:3001/users/me/logout', {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authTokens
            }
        }).then(result => {
            console.log(result)
            if(result.status === 200){
                setAuthTokens("");
            }else{
                console.log("get some error")
            }
        }).catch(e => {
            console.log("get some error : "+ e);
        })
    }

    return (
        <div>
            <div>Admin Page</div>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}