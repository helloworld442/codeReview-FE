import styled from "styled-components";
import { device } from "../../utils/media";

export default function CategoryHead() {
  return (
    <StCategoryHead>
      <CategoryHeadTitle>
        <span>카테고리</span>
        개발자들 사이에서 중요한 코드리뷰의
        <br /> 카테고리를 소개합니다.
      </CategoryHeadTitle>
    </StCategoryHead>
  );
}

const StCategoryHead = styled.div`
  margin: 36px 0;
  text-align: center;
`;

const CategoryHeadTitle = styled.h1`
  font-size: 2.15rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 3.5rem;
  display: flex;
  flex-direction: column;

  span {
    height: 48px;
    font-size: 0.95rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: rgb(64, 58, 107, 0.8);
  }

  @media ${device.tablet} {
    font-size: 1.8rem;

    span {
      font-size: 0.825rem;
    }
  }
`;
