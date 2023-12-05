import styled from "styled-components";
import useTextArea from "../../hooks/useTextArea";
import useHightlightCode from "../../hooks/useHightLightCode";

export default function CodeField({ label, value, ...rest }) {
  const textareaRef = useTextArea(value);
  const hightlightCode = useHightlightCode(value);

  return (
    <StCodeField>
      <CodeFieldLabel>
        {label} <b>*</b>
      </CodeFieldLabel>
      <CodeFieldBox>
        <CodeArea>
          <ul className="code-numbering">
            {hightlightCode.split("\n")?.map((_, i) => (
              <li key={i}>{i + 1}</li>
            ))}
          </ul>
          <pre className="code-core javascript">
            <code
              className="javascript"
              dangerouslySetInnerHTML={{ __html: hightlightCode }}
            />
          </pre>
        </CodeArea>
        <CodeTextArea
          ref={textareaRef}
          value={value}
          {...rest}
          spellCheck="false"
        />
      </CodeFieldBox>
    </StCodeField>
  );
}

const StCodeField = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;

const CodeFieldLabel = styled.label`
  margin-bottom: 12px;
  font-size: 1.35rem;
  font-weight: 300;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;

  b {
    font-size: 0.925rem;
    color: red;
  }
`;

const CodeFieldBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  border: 2px solid #d7e0e6;
  border-radius: 4px;
  box-sizing: border-box;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none;
  background: rgb(247, 246, 243);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CodeTextArea = styled.textarea`
  position: absolute;
  right: 0;
  width: 95%;
  padding: 14px 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: transparent;
  background: transparent;
  caret-color: #333;
  line-height: 1.5rem;
  resize: none;
  z-index: 1;
  white-space: pre-wrap;
  overflow-y: hidden;
`;

const CodeArea = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100%;
  border: none;
  outline: none;
  background: rgb(247, 246, 243);
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: #eee;
  caret-color: #333;
  z-index: 0;

  .code-numbering {
    position: absolute;
    left: 0;
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
    position: absolute;
    right: 0;
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
`;
