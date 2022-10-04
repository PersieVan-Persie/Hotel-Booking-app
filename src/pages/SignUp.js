import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../components/config/firebase'



function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory()

    const Register = (()=> {

        createUserWithEmailAndPassword(auth ,email , password).then(()=>{
            history.push("/home");
        }).catch((error)=>{
            console.log(error);

        })

            

    })

    return(
        <div className="con">
            <h1>Register account</h1>
            <input type="email" placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)} className='email'/>
            <input type="password" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)} className='pass' />
            <button className="signBtn" onClick={Register} id="loginBtn">Sign-In</button>

        </div>
    )
}

export default SignUp;