import styled from "styled-components";
import { device } from "../../utils/media";
import PostsList from "./PostsList";

export default function PostsSection() {
  return (
    <StPostsSection>
      <SectionTitle>전체</SectionTitle>
      <SectionDesc>개발자들 사이에서 유행인 글들입니다.</SectionDesc>

      <PostsList />
    </StPostsSection>
  );
}

const StPostsSection = styled.section`
  width: 780px;

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
  font-size: 0.925rem;
  font-weight: 500;
  font-style: normal;
  font-family: "Noto Sans KR";
  color: #9da7ae;
`;
