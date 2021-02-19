import React ,{useEffect, useState} from 'react'
export default function Users(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{return res.json()})
        .then((data)=>{
            setUsers(data);
        })

    },[])
     return(
         <div className="container_mt_3">
             <div className="row">
                 <div className="col-md-3">
                     <table className="table table_borderd">
                         {
                             users.map((item)=>
                             <tr><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td></tr>
                             )
                         }
                     </table>
                 </div>
             </div>
         </div>

     )
}