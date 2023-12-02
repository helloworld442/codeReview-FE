import styled from "styled-components";
import { device } from "../../utils/media";

export default function WriteHead() {
  return (
    <StWriteHead>
      <WriteHeadTitle>
        <span>글 남기기</span>
        궁금했던 점들을 남기고
        <br />
        다양한 개발자들에게 컨펌받아 보세요!
      </WriteHeadTitle>
    </StWriteHead>
  );
}

const StWriteHead = styled.div`
  margin-top: 12px;
  margin-bottom: 36px;
`;

const WriteHeadTitle = styled.h1`
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
