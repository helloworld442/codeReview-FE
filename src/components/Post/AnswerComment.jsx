import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";
import "highlight.js/styles/atom-one-light.min.css";
import useHightlightCode from "../../hooks/useHightLightCode";

export default function AnswerComments() {
  return (
    <AnswerCommentMenu>
      <AnswerComment />
      <AnswerComment />
      <AnswerComment />
      <AnswerComment />
      <AnswerComment />
    </AnswerCommentMenu>
  );
}

function AnswerComment() {
  const code = 'let alpha = "abcdefghijklmnopqrstuvwxyz";';
  const hightlightCode = useHightlightCode(code);

  return (
    <AnswerCommentItem>
      <CommentItemUser>
        <span></span>
        <h4>김민승</h4>
        <h5>1시간전</h5>
      </CommentItemUser>
      <CommentItemCode className="javascript">
        <span className="numbering">1</span>
        <code
          className="javascript"
          dangerouslySetInnerHTML={{ __html: hightlightCode }}
        />
      </CommentItemCode>
      <CommentItemContent>
        이부분은 이렇게 해결하면 좋을 것 같습니다.
      </CommentItemContent>
      <CommentItemEllipsis />

      <CommentItemLike>
        <Heart />
        좋아요
      </CommentItemLike>
    </AnswerCommentItem>
  );
}

const AnswerCommentMenu = styled.ul`
  width: 100%;
  margin: 36px 0;
`;

const AnswerCommentItem = styled.li`
  position: relative;
  width: 100%;
  min-height: 200px;
  padding: 18px 12px;
  margin: 24px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #d7e0e6;
  border-radius: 6px;
`;

const CommentItemUser = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  span {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    border-radius: 50%;
    background: #d9d9d9;
  }

  h4 {
    margin-bottom: 2px;
    margin-right: 8px;
    font-size: 0.975rem;
    font-weight: 300;
    color: #333;
  }

  h5 {
    margin-bottom: 4px;
    font-size: 0.75rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: rgb(157, 167, 174);
  }
`;

const CommentItemCode = styled.pre`
  display: inline;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0.925rem;
  font-weight: 400;
  font-family: monospace;
  font-style: italic;
  color: #888;
  background: rgb(247, 246, 243);

  .numbering {
    margin-right: 12px;
    font-size: 0.95rem;
    font-weight: 550;
    font-style: normal;
    font-family: monospace;
  }
`;

const CommentItemContent = styled.h3`
  margin-top: 30px;
  font-size: 0.925rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #444;
`;

const CommentItemEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 20px;
  right: 12px;
  width: 1.15rem;
  height: 1.15rem;
`;

const CommentItemLike = styled.span`
  position: absolute;
  bottom: 18px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  font-family: "Noto Sans KR";
  font-size: 0.85rem;
  color: #bbb;
  cursor: pointer;

  svg {
    margin-right: 12px;
    width: 1.05rem;
    height: 1.05rem;
    fill: #bbb;
  }

  &:hover {
    background: rgb(187, 187, 187, 0.1);
  }
`;
