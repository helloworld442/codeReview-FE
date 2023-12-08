import styled from "styled-components";
import { device } from "../../utils/media";
import {
  AuthInput,
  AuthInputBox,
  AuthInputButton,
  AuthInputLabel,
  AuthTimer,
} from "./AuthCommon";
import Button from "../@common/Button";

export default function SignUpForm() {
  return (
    <StSignUpForm>
      <SignUpFormFieldSet>
        <SignUpFormHead>
          <HeadTitle>
            <span>회원가입</span>
            지금 회원가입을 진행하고
            <br />
            별무리의 회원으로 성장하세요
          </HeadTitle>
        </SignUpFormHead>

        <SignUpFormSection>
          <SectionTitle>이메일 인증</SectionTitle>
          <AuthInputBox>
            <AuthInputLabel>
              이메일 <b>*</b>
            </AuthInputLabel>
            <AuthInput placeholder="이메일을 입력하세요" />
            <AuthInputButton>등록하기</AuthInputButton>
          </AuthInputBox>

          <AuthInputBox>
            <AuthInputLabel>
              이메일 확인 <b>*</b>
            </AuthInputLabel>
            <AuthInput placeholder="이메일 확인코드를 입력하세요" />
            <AuthTimer>00 : 00</AuthTimer>
            <AuthInputButton>확인하기</AuthInputButton>
          </AuthInputBox>
        </SignUpFormSection>

        <SignUpFormSection>
          <SectionTitle>정보 입력</SectionTitle>
          <AuthInputBox>
            <AuthInputLabel>
              이메일 <b>*</b>
            </AuthInputLabel>
            <AuthInput placeholder="이메일을 입력하세요" />
          </AuthInputBox>

          <AuthInputBox>
            <AuthInputLabel>
              닉네임 <b>*</b>
            </AuthInputLabel>
            <AuthInput placeholder="닉네임을 입력하세요" />
          </AuthInputBox>

          <AuthInputBox>
            <AuthInputLabel>
              비밀번호 <b>*</b>
            </AuthInputLabel>
            <AuthInput placeholder="비밀번호를 입력하세요" />
          </AuthInputBox>
        </SignUpFormSection>

        <SignUpFormButtons>
          <Button text="취소" size="medium" $primary="true" />
          <Button text="완료" size="medium" $primary="false" />
        </SignUpFormButtons>
      </SignUpFormFieldSet>
    </StSignUpForm>
  );
}

const StSignUpForm = styled.form`
  width: 730px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const SignUpFormFieldSet = styled.fieldset`
  width: 100%;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpFormSection = styled.section`
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid #d7e0e6;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpFormButtons = styled.div`
  width: 100%;
  padding: 48px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

const SignUpFormHead = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 36px;
`;

const HeadTitle = styled.h1`
  width: 100%;
  font-size: 1.65rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    height: 36px;
    font-size: 0.825rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: rgb(64, 58, 107, 0.8);
  }

  @media ${device.tablet} {
    font-size: 1.5rem;

    span {
      font-size: 0.825rem;
    }
  }
`;

const SectionTitle = styled.h3`
  width: 100%;
  margin-bottom: 12px;
  font-size: 1.35rem;
  text-align: left;
  color: #333;
`;
