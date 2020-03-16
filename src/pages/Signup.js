import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup(){
    return (
        <div>
            <form>
                <input type="text" placeholder="name" /><br/>
                <input type="email" placeholder="email" /><br/>
                <input type="password" placeholder="password" /><br/>
                <input type="password" placeholder="confrim password" /><br/>
                <button>Sign Up</button>
            </form>
            <Link to="/login">Already have an account</Link>
        </div>
    )
}