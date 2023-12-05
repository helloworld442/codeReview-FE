import styled from "styled-components";
import { device } from "../../../utils/media";
import PostsList from "./PostsList";
import PostsSearch from "./PostsSearch";

export default function PostsSection() {
  return (
    <StPostsSection>
      <SectionTitle>인기 글</SectionTitle>
      <SectionDesc>개발자들 사이에서 인정받은 글들입니다.</SectionDesc>

      <PostsSearch />

      <PostsList />
    </StPostsSection>
  );
}

const StPostsSection = styled.section`
  width: 720px;
  float: right;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 1.45rem;
  font-weight: 550;
  font-style: normal;
  font-family: "Noto Sans KR";
`;

const SectionDesc = styled.h4`
  font-size: 0.85rem;
  font-weight: 400;
  font-style: normal;
  font-family: "Noto Sans KR";
  color: #9da7ae;
`;
