import react ,{component} from "react";
import Todoitems from "./components/Todoitems/Todoitems";
import Additems from "./components/Additems/Additems";
class App extends component{
    state={
        items:[
            {id:1,name:'Saif',age:21}
            ,{id:2,name:'Ahmed',age:22}
            ,{id:3,name:'Hamza',age:23}
        ]
    }
    deleteItem=(id)=>{
        let items=this.state.items.filter(items=>{return items.id!==id})
        this.setState({items})
    }
    Additems=(item)=>{
        let items=this.state.items;
        items.push(item);
        this.setState({items:items})
    }
 render(){
    return(
        <div>
            TodoList App
            <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
            <Additems/>
        </div>
    );
}

}
export default App;