import React, { useState } from 'react'
//import Product from './product';
import ProductCard from './productcard'
export default function ProductList(){
    const[count,setCount]=useState(0);
    var [products,setProducts]=useState([{id:1,name:'Ashwini'},
                  {id:2,name:'Ramya'},
                  {id:3,name:'Anjali'},
                  {id:4,name:'Akhila'},
                  {id:5,name:'Anusha'}
                 ]);
    const [branch,setBranch]=useState(["CSE","ECE","EEE"]) ;             
    return(
        <div className="ml-4">
            <b>{count}</b>
     <div style={{'display':'flex','flex-direction':'row','flex-wrap':'wrap'}}>
         {
             products.map(item=>
            //<Product id={item.id} name={item.name}/>
           <ProductCard id={item.id} name={item.name}/>
              )
         }
         </div>
         <div>
             <button onClick={()=>setCount(count+1)}>increment</button>
             <button onClick={()=>{setProducts([...products,{id:6,name:'Raju'}])}}>addrow</button>
             <ul>
                {
                    branch.map(item=><li>{item}</li>)
                }
             </ul>
         <input type="text" id="branch"/>
         <button onClick={()=>{setBranch([...branch,document.getElementById('branch').value])}}>Increment</button>
     </div>  
     </div>      
 )
}