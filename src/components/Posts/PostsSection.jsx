import styled from "styled-components";
import { device } from "../../utils/media";
import PostsList from "./PostsList";
import { Suspense } from "react";

export default function PostsSection() {
  return (
    <StPostsSection>
      <SectionBanner>
        <span className="notice">공지</span>
        <h4 className="title">별무리 이벤트 증정 시작! 12.9 ~ 12.14</h4>
        <h4 className="more">더보기</h4>
      </SectionBanner>

      <SectionToggle>
        <span className="active">
          <b /> 최신순
        </span>
        <span>
          <b /> 인기순
        </span>
      </SectionToggle>

      <Suspense fallback={<div>asdf</div>}>
        <PostsList />
      </Suspense>
    </StPostsSection>
  );
}

const StPostsSection = styled.section`
  width: 725px;
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const SectionBanner = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 22px 16px;
  box-sizing: border-box;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
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
    position: absolute;
    right: 16px;
    font-size: 0.725rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: #333;
  }
`;

const SectionToggle = styled.div`
  position: relative;
  top: 30px;
  margin: 24px 0;
  display: flex;

  span {
    margin-right: 10px;
    font-size: 0.8rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: #333;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  b {
    display: inline-block;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: #d9d9d9;
  }

  .active {
    b {
      background: rgb(102, 103, 171, 0.8);
    }
  }
`;
