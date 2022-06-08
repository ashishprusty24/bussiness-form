import React from 'react'
import {useState} from 'react'
import axios from "axios"
const Form = () => {
    const [form,setform] = useState({})

    const handlechange = (e)=>{
      let {name,value} = e.target
      setform({
          ...form,
          [name]:value
      });
    };
     
    const handlesubmit = (e)=>{
        e.preventDefault();
   axios.post("http://localhost:8080/details",{
    username: form.username
  })  
  .then((res)=>console.log(res))
  
    }
  return (
    <div>Form
        <form onSubmit={handlesubmit}>
            <div>
            <label>Name</label>
            <input type="text"
             name='username' 
             value={form.name}
             placeholder='Enter Your name'
             onChange={handlechange}
              />
            </div>
            <div>
            <label>Email</label>
            <input type="email"
             placeholder='Enter Your email' 
             name='email' 
             value={form.name}
             onChange={handlechange}
             />
            </div>
            <div>
            <label>Password</label>
            <input type="password"
             placeholder='Enter Your password'
             name='password' 
             value={form.name}
             onChange={handlechange}
             />
            </div>
            <div>
            <label>age</label>
            <input type="number"
               name='age' 
               value={form.name}
               onChange={handlechange}
            />
            </div>
            <div><input type="submit" /></div>
        </form>
    </div>
  )
}

export default Form