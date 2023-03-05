import React, { useEffect, useRef, useState } from "react";
import debounce from 'lodash/debounce';
import '../Style/Todo.css';

const ListItem = (props) => {
    const [itemName, setName] = useState('');
    const [checkValue, setCheckValue] = useState(false);
    const rendered = useRef(false);
    const debouncedUpdate = useRef(debounce(props.updateItem, 1000));
    const handleClick = (event) => {
        setName(event.target.value);
        debouncedUpdate.current(props.index, event.target.value);
    }
    const handleCheck = () => {
        setCheckValue(true);
        setTimeout(() => {
            props.removeItem(props.index);
        }, 200);
    }
    useEffect(() => {
        if (rendered.current)
            return;
        rendered.current = true;
        setName(props.name);
    },[]);
    return (
        <>
            <div className="flexOnly">
                <input type="checkbox" checked={checkValue} onChange={handleCheck} />
                <input className="noBorder"
                    autoFocus={true}
                    type="text"
                    value={itemName}
                    placeholder="Item Name"
                    onChange={handleClick}
                />
            </div>
        </>
    );
};

export default ListItem;