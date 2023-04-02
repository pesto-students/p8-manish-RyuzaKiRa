import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Store/BulbStore";

function ToggleComponent() {
  const lightBulb = useSelector(state=> state);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggle());
  };

  const toggleStyle = {
    offstyle: "btn-danger",
    onstyle: "btn-success"
  };

  let displayStyle = lightBulb.checked ? toggleStyle.onstyle : toggleStyle.offstyle;
  return (
    <>
      <label>
        <span className={`default switch-wrapper`}>
          <input
            type="checkbox"
            checked={lightBulb.checked}
            onChange={handleChange}
          />
          <span className={`${displayStyle} switch`}>
            <span className="switch-handle" />
          </span>
        </span>
        <span className="switch-label">{lightBulb.text}</span>
      </label>
    </>
  );
}

export default ToggleComponent;
