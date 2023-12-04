import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostsCategory() {
  const { pathname } = useLocation();
  const { categoryId } = useParams();

  return (
    <StPostsCategory>
      <PostsCategoryMenu>
        <a
          href={"/posts/" + categoryId}
          className={
            pathname.includes(`/posts/${categoryId}`) ? "active" : null
          }
        >
          전체
        </a>
        <a
          href={"/posts/best/" + categoryId}
          className={
            pathname.includes(`/posts/best/${categoryId}`) ? "active" : null
          }
        >
          인기 글
        </a>
        <a
          href={"/posts/question/" + categoryId}
          className={
            pathname.includes(`/posts/question/${categoryId}`) ? "active" : null
          }
        >
          Q & A
        </a>
        <a>나의 활동</a>
      </PostsCategoryMenu>

      <PostsCategoryButton>글 남기기</PostsCategoryButton>
    </StPostsCategory>
  );
}

const StPostsCategory = styled.div`
  width: 200px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const PostsCategoryMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media ${device.tablet} {
    flex-direction: row;

    a {
      text-align: center;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 48px;
    padding: 0px 16px;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: rgb(157, 167, 174);
  }

  .active {
    font-weight: 650;
    background: rgb(242, 246, 248);
    color: rgb(20, 22, 23);
  }
`;

const PostsCategoryButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 52px;
  padding: 0px 18px;
  margin: 24px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-size: 16px;
  font-weight: 650;
  color: #fff;
  background: rgb(102, 103, 171, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    display: none;
  }
`;
