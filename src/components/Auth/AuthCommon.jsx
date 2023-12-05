import styled from "styled-components";
import { device } from "../../utils/media";

const AuthInputBox = styled.div`
  position: relative;
  width: 100%;
  margin: 24px 0;
  display: flex;
  align-items: center;
`;

const AuthInputLabel = styled.label`
  display: inline-block;
  width: 20%;
  font-size: 1rem;
  font-weight: 300;

  b {
    color: red;
  }
`;

const AuthInput = styled.input`
  width: 50%;
  height: 54px;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.825rem;
  font-weight: 400;
  color: #000;
  background: rgb(102, 103, 171, 0.1);

  &::placeholder {
    color: rgb(157, 167, 174);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const AuthInputButton = styled.button`
  position: absolute;
  right: 0;
  height: 50px;
  padding: 8px 24px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 800;
  font-family: "Noto Sans KR";
  color: rgb(254, 254, 254);
  background: rgb(102, 103, 171, 0.8);
  cursor: pointer;

  &:disabled {
    background: rgb(194, 200, 214);
    cursor: not-allowed;
  }
`;

const AuthTimer = styled.div`
  height: 50px;
  margin-left: 1.4vw;
  padding: 8px 14px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 0.95rem;
  font-weight: 300;
  color: rgb(254, 254, 254);
  background: rgb(102, 103, 171, 0.8);
  line-height: 35px;

  @media ${device.tablet} {
    margin-left: 0.5rem;
  }
`;

export { AuthInputBox, AuthInputLabel, AuthInput, AuthInputButton, AuthTimer };
