import React,{ component } from "react";
class Additems extends component{
    state={
    name:"" ,
    age:''
    }
    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    handleSubmit=(e)=>{
    e.preventDefailt();
    console.log(this.state)
    this.setState({
        name:"" ,
        age:''
        })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name..." id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter age..." id="age" onChange={this.handleChange} value={this.state.name}/>
                    <input type="submit" value="add" />
                </form>
            </div>
        );
        
    }
    
}
export default Additems;