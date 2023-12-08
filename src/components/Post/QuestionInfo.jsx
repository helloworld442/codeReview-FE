import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import styled from "styled-components";
import { usePostContext } from "./PostQuestion";

export default function QuestionInfo() {
  const { data, onClickHeartButton } = usePostContext();

  return (
    <QuestionPostInfo>
      <h5>{new Date(data.createdAt).toLocaleDateString("ko-KR")}</h5>
      <span onClick={onClickHeartButton}>
        <Heart />
        좋아요 {data.heartCount}
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
`;
