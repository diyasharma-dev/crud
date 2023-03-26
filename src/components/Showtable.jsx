import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
function App(){
    const [data,setDate] = useState([])
    const  navigate=useNavigate()
    useEffect(()=>{
       getList()
    },[])
    console.log(data)
    function getList()
    {
         fetch('http://localhost:5000/student').then((result)=>{
            result.json().then((resp)=>{
                setDate(resp)
            })
        })
    }
    function deleteUser(id)
    {
       fetch('http://localhost:5000/student/'+id,{
        method:"DELETE"
    }).then((result)=>{
        result.json().then((resp)=>{
           console.log(resp)
           getList()
        })
    })
       
    }

   const editUser=(id)=>{
   console.log(id)
   navigate("/edit/"+id)
   }
    return(
        <div>
            <h1>TABLE OF GET APL</h1>
            <table border="1" >
                
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td>Password</td>
                    <td>Operations</td>
                </tr>
            
                {
                    data.map((item)=>
                    <tr>
                    
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.password}</td>
                        <td><button onClick={()=>deleteUser(item.id)}>Delete</button>
                        <button onClick={()=>editUser(item.id)}>Edit</button></td>
                        
                    </tr>
            
                    )
                }
            </table>
        </div>
    )
}
export default App;