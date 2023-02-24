import styled from "styled-components";
import { width, background } from 'styled-system';

type ButtonProps = {
  width?: string;
  background?: string;
}

export const Button = styled.span<ButtonProps>`
  ${width};
  ${background};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 12px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

Button.defaultProps = {
  width: "287.33px",
  background: "#009EDD",
};

export default Button
