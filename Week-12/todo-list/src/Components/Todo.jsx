import React, { useState } from "react";
import '../Style/Todo.css';
import ListItem from "./ListItem";

const Todo = () => {

    const [list, setList] = useState(['Coding', 'Eating', 'Sleeping', 'Debugging']);
    const addItem = () => {
        const newList = [...list];
        newList.push('');
        setList(newList);
    }
    const removeItem = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }
    const updateItem = (index, value) => {
        const updatedList = [...list];
        updatedList[index] = value;
        setList(updatedList);
    }
    return (
        <>
            <div className="center">
                <h1>TODO Application</h1>
            </div>
            <div className="rowCenter">
                {
                    list.map((itemName, i) => {
                        return(
                            <div className="smallHeight" key={`${itemName}-${i}`}>
                                <ListItem name={itemName} index={i} removeItem={removeItem} updateItem={updateItem}/>
                            </div>
                        )
                    })
                }
                <button className="addButton" onClick={addItem}>Add</button>
            </div>
            <div>
            </div>
        </>
    );
};

export default Todo;