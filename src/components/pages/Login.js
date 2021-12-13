import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

import '../../App.css'

export default function SignInPage() {

    const [formdata, setFormdata] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formdata)

        
         let res = fetch('http://localhost:4000/login', {method: "POST", body: JSON.stringify(formdata) , headers : {
             'Content-Type' : 'application/json'
         }} ).then(response => response.json()).then(respose => console.log(respose))

    }


    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username or email address</label><br/>
                    <input onChange={e => setFormdata({...formdata,email: e.target.value})} type="email" name="email" required value={formdata.email}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input onChange={e => setFormdata({...formdata,password: e.target.value})} type="password" name="password" required value={formdata.password}/>
                </p>
                <p>
                <Link to="/">Login</Link>.
                </p>
            </form>
            <footer>
                <p>New User? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}