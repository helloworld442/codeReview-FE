import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import styled from "styled-components";
import useUpdateHeart from "./useUpdateHeart";

export default function QuestionInfo({ post }) {
  const onUpdateHeart = useUpdateHeart();

  return (
    <QuestionPostInfo>
      <h5>{new Date(post.createdAt).toLocaleDateString("ko-KR")}</h5>
      <span
        onClick={onUpdateHeart}
        className={post.heartCheck ? "active" : null}
      >
        <Heart />
        좋아요 {post.heartCount}
      </span>
    </QuestionPostInfo>
  );
}

const QuestionPostInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    font-size: 0.85rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    color: #888;
  }

  span {
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-family: "Noto Sans KR";
    font-size: 0.95rem;
    color: #bbb;
    cursor: pointer;

    svg {
      margin-right: 12px;
      width: 1.25rem;
      height: 1.25rem;
      fill: #bbb;
    }

    &:hover {
      background: rgb(187, 187, 187, 0.1);
    }
  }

  .active {
    border: 1px solid rgb(102, 103, 171, 1);
    color: rgb(102, 103, 171, 1);

    svg {
      fill: rgb(102, 103, 171, 1);
    }
  }
`;
