import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

export default function Login() {
  const [credentails, setcredentails] = useState({email:"",password:""})

  let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
    
        const response = await fetch("http://localhost:5000/api/login",{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentails.email,password:credentails.password})
        });

        const json = await response.json();

        console.log(json, 'sd');

        if(!json.Success){
            alert('Enter vaild  Credentails')
        }
        if(json.Success){
          localStorage.setItem("authToken", json.authToken)
          localStorage.setItem("userEmail", credentails.email)
          console.log(localStorage.getItem("authToken"), "Data")
            navigate("/");
        }
    }

    const onchange = (event) => {
        setcredentails({...credentails, [event.target.name]:event.target.value})
    }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={credentails.email}  onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credentails.password}  onChange={onchange} id="exampleInputPassword1" />
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/signup" className='m-3 btn btn-danger'>I'm a new user</Link>
</form>
</div>
    </>
  )
}
