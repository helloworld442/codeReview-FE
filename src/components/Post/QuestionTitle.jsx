import PostModal from "./PostModal";
import { ReactComponent as PenSquare } from "../../assets/pen-to-square-regular.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";
import styled from "styled-components";
import { usePostContext } from "./PostQuestion";
import useDisabled from "../../hooks/useDisabled";

export default function QuestionTitle() {
  const { data, form, onChange, onToggleUpdateInput, onClickDeleteButton } =
    usePostContext();

  const [disabled, onClick, onKeyDown] = useDisabled(onToggleUpdateInput);

  return (
    <>
      <QuestionPostTitle
        type="text"
        name="title"
        value={form.title}
        onChange={onChange}
        disabled={disabled}
        onKeyDown={onKeyDown}
      />

      {disabled && <QuestionPostPen onClick={onClick} />}

      <PostModal
        trigger={<QuestionPostEllipsis />}
        onTrigger={onClickDeleteButton}
      />

      <QuestionPostView>
        <h6>
          추천 <span>{data.heartCount}</span>
        </h6>
        <h6>
          조회 <span>{data.views}</span>
        </h6>
      </QuestionPostView>
    </>
  );
}

const QuestionPostTitle = styled.input`
  width: 600px;
  box-sizing: border-box;
  font-size: 1.35rem;
  font-weight: 700;
  font-family: "Noto Sans KR";

  &:disabled {
    border: none;
    outline: none;
    background: #fff;
    color: #333;
  }

  &:enabled {
    border: 1px solid #d7e0e6;
    border-radius: 2px;
    outline: 2px solid rgb(102, 103, 171, 0.8);
    background: #fefefe;
    color: #444;
  }
`;

const QuestionPostPen = styled(PenSquare)`
  position: absolute;
  top: 9px;
  right: 48px;
  width: 1.2rem;
  height: 1.2rem;
  fill: #888;
  cursor: pointer;

  &:hover {
    fill: rgb(102, 103, 171, 1);
  }
`;

const QuestionPostEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 8px;
  right: 0;
  width: 1.2rem;
  height: 1.2rem;
  fill: rgb(102, 103, 171, 1);
`;

const QuestionPostView = styled.div`
  padding: 20px 0;
  margin-bottom: 36px;
  border-bottom: 2px solid #e8e8e8;
  display: flex;
  gap: 8px;

  h6 {
    font-size: 0.85rem;
    font-weight: 400;
    font-family: "Noto Sans KR";
    color: rgb(157, 167, 174);
  }

  span {
    display: inline-block;
    margin-left: 2px;
    color: rgb(102, 103, 171, 1);
  }
`;
