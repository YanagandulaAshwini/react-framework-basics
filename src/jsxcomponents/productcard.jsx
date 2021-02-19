import React from 'react'
const onClickHandler=()=>{
  console.log("when your clicked")

}
 export default function ProductCard(props){
     return(
        <div className="card" style={{'width': '18rem;'}}>
        <div class="card-body">
          <h5 class="card-title">products</h5>
          <p class="card-text">{props.id}</p>
          <p class="card-text">{props.name}</p>
          <a href="#" class="btn btn-primary" onClick={onClickHandler}>Add</a>
        </div>
      </div>
     )
 }