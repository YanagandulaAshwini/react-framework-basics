import React,{ Component } from "react";

export default class ClassComponent extends Component{
    arr=['mango','apple','banana'];
    constructor(props){
        super(props);
        this.state={id:1,name:props.name};
    }
    listFunction=()=>{
        return (<h2>Welcome</h2>);
    }
    render(){
        return(
            <div>
                <h1>{this.state.id} {this.state.name}</h1>
                {this.listFunction()}
                {this.arr.map(item=><b>{item}</b>)}
            </div>
        )
    }

}