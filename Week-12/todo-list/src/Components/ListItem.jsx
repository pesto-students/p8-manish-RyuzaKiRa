import React, { useState } from "react";
import '../Style/Todo.css';

const ListItem = (props) => {
    const [checkValue, setCheckValue] = useState(false);
    const handleChange = (event) => {
        props.updateItem(props.index, event.target.value);
    }
    const handleCheck = () => {
        setCheckValue(true);
        setTimeout(() => {
            props.removeItem(props.index);
        }, 200);
    }
    return (
        <>
            <div className="flexOnly">
                <input type="checkbox" checked={checkValue} onChange={handleCheck} />
                <input className="noBorder"
                    autoFocus={true}
                    type="text"
                    value={props.name}
                    placeholder="Item Name"
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default ListItem;