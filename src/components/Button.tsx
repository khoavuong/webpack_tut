import React, { FC } from "react";
import { BaseButton } from "./Button.styles";

interface ButtonProps {
  title?: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  return <BaseButton>Buttons {title}</BaseButton>;
};

export default Button;
