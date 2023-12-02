import styled from "styled-components";

export default function InputField({ label, ...rest }) {
  return (
    <StInputField>
      <InputFieldLabel>
        {label}
        <b>*</b>
      </InputFieldLabel>
      <InputFieldInput {...rest} />
    </StInputField>
  );
}

const StInputField = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;

const InputFieldLabel = styled.label`
  margin-bottom: 12px;
  font-size: 1.35rem;
  font-weight: 300;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;

  b {
    font-size: 0.925rem;
    color: red;
  }
`;

const InputFieldInput = styled.input`
  height: 56px;
  padding: 0 18px;
  border-radius: 8px;
  border: 2px solid #d7e0e6;
  outline: none;
  font-size: 1.05rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 60px;

  &::placeholder {
    color: rgb(157, 167, 174);
  }
`;
