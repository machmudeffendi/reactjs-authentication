import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth';
import axios from 'axios';

export default function Login(props){
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const referer = props.location.state.referer || '/';

    function postLogin(){
        axios.post("http://localhost:3001/users/login", {
            email: userName,
            password: password
        }).then(result => {
            if(result.status === 200){
                setAuthTokens(result.data.token);
                setLoggedIn(true);
                setIsError(false);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        })
    }

    if(isLoggedIn){
        return <Redirect to={referer} />
    }

    return(
        <div>
            <form>
                <input 
                    type="email" 
                    value={userName}
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                    placeholder="email"
                /><br/>
                <input 
                    type="password" 
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    placeholder="password"
                /><br/>
                <button type="button" onClick={postLogin}>Sign in</button>
            </form>
            <Link to="/signup">Don't have an account?</Link>
            { isError && <label>The username or password provided were incorrect!</label>}
        </div>
    )
}