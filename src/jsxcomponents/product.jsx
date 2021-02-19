import React from 'react'
export default function Product(props){
    return(
        <div class="card">
            <tr><td>{props.id}</td>
            <td>{props.name}</td></tr>
        </div>

    )
}