import React from "react";
import './Todoitems.css';
const Todoitems=(props)=>{
    const {items,deleteItem}=props;
    const ListItems=items.map(item=>{
  return(
    <div key={item.id}>
        <span>{items.name}</span>
        <span>{items.age}</span>
        <span onClick={()=>deleteItem(item.id)}>&items;</span>
    </div>
    )

    })
    return(
        <div className="ListItems">
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
            {ListItems}

        </div>
    );
}
export default Todoitems;