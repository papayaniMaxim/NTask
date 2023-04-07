import { ButtonHTMLAttributes } from "react";
import classes from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  backgroundcolor: "red" | "blue" | "gray";
};

function Button(props: ButtonProps) {
  const { children, backgroundcolor } = props;
  const className = [classes.button, classes[backgroundcolor]].join(" ");

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}

export default Button;
