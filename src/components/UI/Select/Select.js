import React from "react";

function Select(props) {
  const selectChangeHandler = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}:</label>
      <select id={props.id} name={props.name} onChange={selectChangeHandler}>
        {props.values.map((optionValue) => {
          return (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
