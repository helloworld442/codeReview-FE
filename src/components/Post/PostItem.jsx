import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostItem({ post }) {
  return (
    <StPostItem>
      <Link to={"/post/" + post.id}>
        <PostItemTitle>{post.title}</PostItemTitle>
        <PostItemDesc>{post.problem}</PostItemDesc>
        <PostItemUser>
          <span className="thumnail"></span>
          <h4 className="name">김민승</h4>
        </PostItemUser>
        <PostItemInfo>
          <h6 className="info-text">
            추천 <span>1</span>
          </h6>
          <h6 className="info-text">
            조회 <span>2</span>
          </h6>
        </PostItemInfo>
      </Link>
    </StPostItem>
  );
}

const StPostItem = styled.li`
  position: relative;
  height: 120px;
  padding: 12px 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(102, 103, 171, 0.8);
  }

  & + & {
    margin-top: 24px;
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  @media ${device.tablet} {
    padding: 20px 10px;
    height: 150px;
  }
`;

const PostItemTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 0.8rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;

  @media ${device.tablet} {
    margin-bottom: 8px;
    font-size: 0.975rem;
  }
`;

const PostItemDesc = styled.h5`
  padding: 4px 0;
  box-sizing: border-box;
  font-size: 0.7rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${device.tablet} {
    width: 450px;
    font-size: 0.85rem;
  }
`;

const PostItemUser = styled.div`
  position: absolute;
  bottom: 10px;
  left: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;

  .thumnail {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #d9d9d9;
  }

  .name {
    font-size: 0.725rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #333;
  }

  @media ${device.tablet} {
    .thumnail {
      width: 26px;
      height: 26px;
    }
  }
`;

const PostItemInfo = styled.div`
  position: absolute;
  bottom: 16px;
  right: 12px;
  display: flex;
  gap: 8px;

  .info-text {
    font-size: 0.675rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #333;
  }

  span {
    color: rgb(102, 103, 171, 1);
  }

  @media ${device.tablet} {
    .info-text {
      font-size: 0.775rem;
    }
  }
`;
