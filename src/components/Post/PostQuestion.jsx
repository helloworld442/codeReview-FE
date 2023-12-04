import styled from "styled-components";
import "highlight.js/styles/atom-one-light.min.css";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";
import { ReactComponent as Ellipsis } from "../../assets/ellipsis-vertical-solid.svg";
import useHightlightCode from "../../hooks/useHightLightCode";

const post = {
  category: "Javascript",
  code: "//s의 길이만큼 반복하면서 다음 과정을 수행한다.\n//index의 길이만큼 반복하면서 다음 과정을 수행한다.\n//만약 skip에 해당 단어가 있다면 index를 올리지 않는다.\n//만약 skip에 해당 단어가 없다면 index를 올린다.\n//index만큼 뒤에 있는 알파벳을 answer에 더한다.\n//answer를 리턴한다.\n\nfunction solution(s, skip, index) {\n    var answer = '';\n    let alpha = \"abcdefghijklmnopqrstuvwxyz\";\n    for(let i = 0; i < s.length; i++) {\n        let j = 0;\n        let k = alpha.indexOf(s[i])\n        while (j < index) {\n            if(!skip.includes(alpha[(k+1) % 26])) {\n                j++;\n            }\n            k += 1;\n        }\n        k = k % 26\n        answer += alpha[k]\n    }\n    \n    return answer;\n}",
  title: "[Example 1] 자바스크립트 알고리즘 문의 ",
  problem:
    "[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의",
  question:
    "[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의",
  id: 11,
};

const PostQuestion = () => {
  const hightlightedCode = useHightlightCode(post.code);

  return (
    <StQuestionPost>
      <QuestionPostTitle>{post.title}</QuestionPostTitle>

      <QuestionPostEllipsis />

      <QuestionPostView>
        <h6>
          추천 <span>1</span>
        </h6>
        <h6>
          조회 <span>2</span>
        </h6>
      </QuestionPostView>

      <QuestionPostDesc>
        {post.code && (
          <div className="question-code">
            <ul className="code-number">
              {post.code.split("\n")?.map((_, i) => (
                <li key={i}>{i + 1}</li>
              ))}
            </ul>
            <pre className="code-core javascript">
              <code dangerouslySetInnerHTML={{ __html: hightlightedCode }} />
            </pre>
          </div>
        )}
      </QuestionPostDesc>

      <QuestionPostDesc>
        <span className="question-category">문제상황</span>
        <pre className="question-problem">{post.problem}</pre>
      </QuestionPostDesc>
      <QuestionPostDesc>
        <span className="question-category">궁금한점</span>
        <pre className="question-question">{post.question}</pre>
      </QuestionPostDesc>
      <QuestionPostInfo>
        <h5>2022.09.21</h5>
        <span>
          <Heart />
          좋아요 0
        </span>
      </QuestionPostInfo>
    </StQuestionPost>
  );
};

const StQuestionPost = styled.div`
  position: relative;
  width: 100%;
`;

const QuestionPostTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  font-family: "Noto Sans KR";
  color: #333;
`;

const QuestionPostEllipsis = styled(Ellipsis)`
  position: absolute;
  top: 2px;
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

const QuestionPostDesc = styled.h5`
  font-size: 1.3rem;

  .question-code {
    position: relative;
    right: 0;
    width: 100%;
    min-height: 300px;
    margin-bottom: 24px;
    border: none;
    outline: none;
    background: rgb(247, 246, 243);
    font-size: 1rem;
    font-weight: 400;
    font-family: monospace;
    color: #eee;
    z-index: 1;
    display: flex;
    justify-content: flex-start;

    .code-number {
      width: 5%;
      padding: 14px 0;
      margin: 0;
      box-sizing: border-box;
      font-size: 1.15rem;
      font-weight: 400;
      font-family: monospace;
      color: #888;
      background: rgb(247, 246, 243);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      white-space: pre-wrap;
      overflow-y: hidden;
      line-height: 1.5rem;
    }

    .code-core {
      width: 95%;
      padding: 14px 12px;
      box-sizing: border-box;
      font-size: 1rem;
      font-weight: 400;
      font-family: monospace;
      color: #333;
      caret-color: #333;
      white-space: pre-wrap;
      overflow-y: hidden;
      line-height: 1.5rem;
    }
  }

  .question-category {
    display: inline-block;
    margin-bottom: 14px;
    font-size: 1.4rem;
    font-weight: 300;
    color: rgb(102, 103, 171, 0.8);
  }
  .question-problem,
  .question-question {
    margin-bottom: 24px;
    font-size: 1rem;
    font-weight: 500;
    font-family: "Noto Sans KR";
    line-height: 1.8rem;
  }

  & + & {
    margin-top: 14px;
  }
`;

const QuestionPostInfo = styled.div`
  margin-top: 72px;
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

export default PostQuestion;
