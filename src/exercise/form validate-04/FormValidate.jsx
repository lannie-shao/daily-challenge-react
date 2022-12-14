import React,{useState} from 'react'
import './form.css';

const FormValidate = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmP, setConfirmP]=useState('');
    const [message,setMessage]=useState('');

    const findError=()=>{
        const errors=[];

        if(!email||!password||!confirmP)
        errors.push('All fields must be filled in');
        
        if(password!==confirmP)
        errors.push('Passwords is not the same');

        if(password.length<8)
        errors.push('Password must be at least 8 characters')
    
        return errors;
    }

    const submit=(e)=>{
        e.preventDefault();

        const errors=findError();
        setMessage(errors.length? errors.join(','):'Users created')
    }

  return (
    <div className='padding__section'>
        <h1>Sign In</h1>
        <form className='flex__center'>
            <label for='email'>Email:</label>
            <input type='email' id='email' value={email}
            onChange={(e)=>setEmail(e.target.ariaValueMax)}
            />
            <label for='password'>Password:</label>
            <input type='password' id='password'
             value={password}
             onChange={(e)=>setPassword(e.target.ariaValueMax)}
            />
            <label for='confirmP'>Confirm Password:</label>
            <input type='password' id='confirmP'
             value={confirmP}
             onChange={(e)=>setConfirmP(e.target.ariaValueMax)}
            />
            {message}
        </form>
        <button type='button' onClick={submit}>Submit</button>
    </div>
  )
}

export default FormValidate