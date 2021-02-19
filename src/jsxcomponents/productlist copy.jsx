import React from 'react';
export default function ProductList1(){
    var products=[{id:1,name:'Ashwini'},
                  {id:2,name:'Ramya'},
                  {id:3,name:'Anjali'}
                 ];
    return(
     <div className="container">
         <div className="row">
             <div className="col-md-4">
                 <div className="col-md-3">
                     <table border="1">
                         {
                             products.map(item=>
                                <tr><td>{item.id}</td>
                                <td>{item.name}</td></tr>)
                         }
                     </table>
                 </div>
                </div>        
         </div>
     </div>
 )
}