import { useSelector, useDispatch } from "react-redux";
import { FunctionComponent, FormEvent } from "react";

import { FormProps } from "../../types";

import { selectValue, setValue } from "./formSlice";

const Form: FunctionComponent<FormProps> = (props) => {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  // Submit input for results
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch(setValue(""));
    props.onSubmit(value.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <div className="login-wrapper">
      <span className="login-title">Student's Name:</span>
      <input
        required
        type="text"
        value={value}
        onChange={e => dispatch(setValue(e.target.value))}
      />
      </div>
      <span className="login-error">{props.error}</span>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
