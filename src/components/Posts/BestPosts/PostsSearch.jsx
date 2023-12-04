import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../assets/magnifying-glass-solid.svg";

export default function PostsSearch() {
  return (
    <PostsSearchForm>
      <PostsSearchButton />
      <PostsSearchInput placeholder="제목을 입력해주세요" />
    </PostsSearchForm>
  );
}

const PostsSearchForm = styled.form`
  width: 100%;
  height: 64px;
  padding: 0 18px;
  margin: 36px 0;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #d7e0e6;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0px 4px 10px 0px rgba(58, 62, 65, 0.1);
`;

const PostsSearchButton = styled(SearchIcon)`
  width: 1.15rem;
  height: 1.15rem;
  fill: rgb(102, 103, 171, 0.8);
`;

const PostsSearchInput = styled.input`
  width: 650px;
  border: none;
  outline: none;
  margin-bottom: 2px;
  font-size: 0.975rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 50px;

  &::placeholder {
    color: rgb(157, 167, 174);
  }
`;
