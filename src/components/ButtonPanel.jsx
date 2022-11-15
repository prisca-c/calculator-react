import React from "react";
import Button from "./Button";

const ButtonPanel = (props) => {
  return (
  <div className={"flex flex-col "}>
    <div className="flex flex-row">
      <Button name="AC" handleClick={props.handleClick} />
      <Button name="+/-" handleClick={props.handleClick} />
      <Button name="%" handleClick={props.handleClick} />
      <Button name="/" orange handleClick={props.handleClick} />
    </div>
    <div className="flex flex-row">
      <Button name="7" handleClick={props.handleClick} />
      <Button name="8" handleClick={props.handleClick} />
      <Button name="9" handleClick={props.handleClick} />
      <Button name="x" orange handleClick={props.handleClick} />
    </div>
    <div className="flex flex-row">
      <Button name="4" handleClick={props.handleClick} />
      <Button name="5" handleClick={props.handleClick} />
      <Button name="6" handleClick={props.handleClick} />
      <Button name="-" orange handleClick={props.handleClick} />
    </div>
    <div className="flex flex-row">
      <Button name="1" handleClick={props.handleClick} />
      <Button name="2" handleClick={props.handleClick} />
      <Button name="3" handleClick={props.handleClick} />
      <Button name="+" orange handleClick={props.handleClick} />
    </div>
    <div className="flex flex-row">
      <Button name="0" long handleClick={props.handleClick} />
      <Button name="." handleClick={props.handleClick} />
      <Button name="=" orange handleClick={props.handleClick} />
    </div>
  </div>
  );
}

export default ButtonPanel;