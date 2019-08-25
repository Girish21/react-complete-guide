import React from "react";

import classes from "./Input.module.css";

const input = props => {
  let input = null;
  let classList = [classes.InputElement];

  if (props.touched && !props.valid && props.required)
    classList.push(classes.Required);
  if (props.touched && props.valid && props.required)
    classList = [classes.InputElement, classes.Valid];

  switch (props.elementType) {
    case "input":
      input = (
        <input
          className={classList.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
          onBlur={props.touchedHandler}
        />
      );
      break;
    case "textarea":
      input = (
        <textarea
          className={classList.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "select":
      const { options, ...config } = props.elementConfig;
      input = (
        <select
          className={classList.join(" ")}
          {...config}
          value={props.value}
          onChange={props.change}
          onBlur={props.touchedHandler}
        >
          <option value={null}></option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      );
      break;
    default:
      input = (
        <input
          className={classList.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
          onBlur={props.touchedHandler}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor={props.elementConfig.name}>
        {props.elementConfig.placeholder}
      </label>
      {input}
    </div>
  );
};

export default input;
