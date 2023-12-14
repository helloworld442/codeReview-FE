import styled, { css } from "styled-components";
import { device } from "../../utils/media";

export default function Button({ size, text, $primary, ...rest }) {
  return (
    <StButton size={size} $primary={$primary} {...rest}>
      {text}
    </StButton>
  );
}

const StButton = styled.button`
  ${(props) =>
    props.size === "medium" &&
    css`
      width: 160px;
      height: 58px;
      border: none;
      border-radius: 8px;
      outline: none;
      font-size: 1.25rem;
      font-weight: 300;
      font-family: "Jua";
      color: #fff;
      background: rgb(102, 103, 171, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      width: 100%;
      height: 64px;
      border: none;
      border-radius: 8px;
      outline: none;
      font-size: 1.25rem;
      font-weight: 300;
      font-family: "Jua";
      color: #fff;
      background: rgb(102, 103, 171, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `}

  ${(props) =>
    props.$primary === "true" &&
    css`
      border: 3px solid rgb(102, 103, 171, 0.8);
      color: rgb(102, 103, 171, 0.8);
      background: #fff;

      &:hover {
        border: none;
        background: rgb(102, 103, 171, 0.8);
        color: #fff;
      }
    `}
`;
