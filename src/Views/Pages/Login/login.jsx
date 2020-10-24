import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../../Controllers/Redux/authSlice';

import './login.css';

export default () =>{
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        name: "",
        password: ""
    })

    function inputChanged(e){
        // ... allows us to set formInput in [] to target
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    function submit(e){
        // pass in action imported signIn as function, it will dispatch the action when we submit
        // we need to pass in a payload, payload is the state that we set (formInput), will pass in name and pw as object
        dispatch(signIn(formInput));
        e.preventDefault();

    }

    return(
        <div className="loginBG">
            <form className='login-panel'>
                <h1>Login: </h1>
                <input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={submit}>Login</button>
            </form>
        </div>
    )
}