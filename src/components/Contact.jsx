import React,{Component, useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Contact(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const handleData=(e)=>
    {
     e.preventDefault()
     let regId={name,email,mobile,password}
     //console.log(regId)
     
     let promise=fetch("http://localhost:5000/student",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(regId)
     })
     promise.then((response)=>{
        return response.json()
     }).then((Result)=>{
        console.log(Result)
     }).catch((error)=>{
        console.log(error)
     })
     navigate("/showtable")
    }
    
    return(
        <React.Fragment>
           <div className="container-fluid">
            <div className="row">
                <div className="col-sm-5 mx-auto fs-3">
                    <form onSubmit={handleData}>
                    Name:<input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    Email:<input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    Mobile:<input type="number" className="form-control"value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                    Password:<input type="password" className="form-control"value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button type="submit" className="btn btn-success form-control mt-3">Registration</button>
                    </form>
                </div>
            </div>
           </div>
        </React.Fragment>
    )
}