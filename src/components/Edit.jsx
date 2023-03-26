import React,{useState,useEffect} from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
export default function Edit(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [password,setPassword]=useState("")
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
    let promise=fetch("http://localhost:5000/student/"+id)
       promise.then((res)=>{
        return res.json();
       }).then((data)=>{
        setName(data.name)
        setEmail(data.email)
        setMobile(data.mobile)
        setPassword(data.password)
       }).catch((error)=>{
        console.log(error)
       })

   },[])
 
   const updateData=()=>{
       let newData={
        name:name,
        email:email,
        mobile:mobile,
        password:password,
       }
    let promise=fetch("http://localhost:5000/student/"+id,{
        method:"PUT",
        headers:{"Content-type":"Application/json"},
        body:JSON.stringify(newData)
    })
    promise.then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error);
    })
    navigate("/showtable")
   }
 
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-5 mx-auto fs-3">
                    <form>
                    Name:<input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    Email:<input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    Mobile:<input type="number" className="form-control"value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
                    Password:<input type="password" className="form-control"value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button type="button" className="btn btn-success form-control mt-3" onClick={updateData}>update</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
    }