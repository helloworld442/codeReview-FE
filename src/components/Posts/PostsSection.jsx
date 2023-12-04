import styled from "styled-components";
import { device } from "../../utils/media";
import PostsList from "./PostsList";

export default function PostsSection() {
  return (
    <StPostsSection>
      <SectionBanner>
        <span className="notice">공지</span>
        <h4 className="title">별무리 이벤트 증정 시작! 12.9 ~ 12.14</h4>
        <h4 className="more">더보기</h4>
      </SectionBanner>

      <PostsList />
    </StPostsSection>
  );
}

const StPostsSection = styled.section`
  width: 720px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const SectionBanner = styled.div`
  display: inline-block;
  width: 100%;
  padding: 20px 16px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  display: flex;
  gap: 8px;
  background: rgb(244, 244, 244);

  .notice {
    font-size: 0.875rem;
    font-weight: 650;
    font-family: "Noto Sans KR";
    color: #333;
  }

  .title {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #333;
  }

  .more {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #333;
  }
`;
