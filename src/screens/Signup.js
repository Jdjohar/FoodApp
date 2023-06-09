
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {

    const [credentails, setcredentails] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit = async(e) => {
        e.preventDefault();
    
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentails.name,email:credentails.email,password:credentails.password,location:credentails.location})
        });

        const json = await response.json();
        console.log(json);

        if(json.success){
            alert('Enter vaild  Credentails')
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
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" name="name" value={credentails.name} className="form-control" onChange={onchange}  />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={credentails.email}  onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credentails.password}  onChange={onchange} id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="location" className="form-label">GeoLocation</label>
    <input type="text" className="form-control" name="location" value={credentails.location}  onChange={onchange}  id="exampleInputPassword1" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Login</Link>
</form>
</div>
    </>
  )
}
