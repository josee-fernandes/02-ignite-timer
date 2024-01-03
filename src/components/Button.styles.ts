import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: none;
  margin: 8px;

  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  /* background: ${(props) => buttonVariants[props.variant]}; */
  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`;
