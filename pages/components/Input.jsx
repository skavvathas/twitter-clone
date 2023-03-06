import React from "react";
//import {handleChangeRegister} from ;

function Input(props) {

  return (
    <input
      //onChange={handleChange}
      onChange={props.onChange}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      required
      type={props.type}
      pattern={props.pattern}
      title={props.title}
  />);
}

export default Input;