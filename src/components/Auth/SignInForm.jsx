import styled from "styled-components";
import { device } from "../../utils/media";
import { AuthInput } from "./AuthCommon";
import Button from "../@common/Button";
import useInput from "../../hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { loginUser } from "../../apis/auth";

export default function SignInForm() {
  const [form, onChange, refresh] = useInput({ email: "", password: "" });

  const queryClient = useQueryClient();

  const loginMutation = useMutation(loginUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      window.history.back();
    },
    onError: (error) => {
      console.log(error.data);
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    loginMutation.mutate(form);

    refresh();
  };

  return (
    <StSignInForm onSubmit={onSubmit}>
      <SignInFormHead>
        <HeadTitle>
          <span>로그인</span>
          지금 로그인하시고
          <br />
          매력적인 질문을 던져보세요
        </HeadTitle>
      </SignInFormHead>

      <SignInFormBox>
        <SignInFormLabel>이메일</SignInFormLabel>
        <SignInFormInput
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="이메일을 입력하세요"
        />
      </SignInFormBox>

      <SignInFormBox>
        <SignInFormLabel>비밀번호</SignInFormLabel>
        <SignInFormInput
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="비밀번호를 입력하세요"
        />
      </SignInFormBox>

      <Button size="large" text="로그인" type="submit" />

      <SignInFormLink>
        <a>아이디 찾기</a>
        <a>비밀번호 찾기</a>
        <a href="/user/signup">회원가입</a>
      </SignInFormLink>
    </StSignInForm>
  );
}

const StSignInForm = styled.form`
  width: 450px;
  height: 650px;
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const SignInFormHead = styled.div`
  width: 100%;
  margin-top: 18px;
  margin-bottom: 36px;
`;

const SignInFormLink = styled.div`
  position: relative;
  bottom: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  a {
    padding-right: 6px;
    border-right: 1px solid #d7e0e6;
    font-size: 0.825rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #666;

    &:last-child {
      border-right: none;
    }
  }
`;

const SignInFormLabel = styled.label`
  position: relative;
  bottom: 12px;
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
`;

const SignInFormBox = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SignInFormInput = styled(AuthInput)`
  width: 100%;
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
