import React from "react";
import Toggle from "./Toggle.component";
import { useSelector } from 'react-redux';

const Form = () => {
  const lightBulb = useSelector(state=> state);

  return (
    <>
      <div className={`center ${lightBulb.checked? "lit" : "dark"}`}>
        <Toggle />
      </div>
    </>
  );
}

export default Form;