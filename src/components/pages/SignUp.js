import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import '../../App.css'

export default function SignUpPage() {
    let history = useHistory();
    const [formdata, setFormdata] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formdata)

         
        let res = fetch('http://localhost:4000/register', {method: "POST", body: JSON.stringify(formdata) , headers : {
            'Content-Type' : 'application/json'
        }} ).then(response => response.json()).then(respose => console.log(respose))

    }


    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input onChange={e => setFormdata({...formdata, username: e.target.value})} type="text" name="username" required value={formdata.username}/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input onChange={e => setFormdata({...formdata, email: e.target.value})} type="email" name="email" required value={formdata.email} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input onChange={e => setFormdata({...formdata, password: e.target.value})} type="password" name="password" required value={formdata.password}/>
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p>
                    <button type="submit" onClick={()=>{history.push('/')}}>NEXT</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}