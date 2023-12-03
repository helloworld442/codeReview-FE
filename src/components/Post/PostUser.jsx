import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostUser() {
  return (
    <StPostUser>
      <PostUserProfile>
        <span></span>
        <h4>김민승</h4>
      </PostUserProfile>
      <PostUserInfo>
        <dl>
          <dt>Skill : </dt>
          <dd>Javascript , React</dd>
        </dl>

        <dl>
          <dt>Rank : </dt>
          <dd>Cluster</dd>
        </dl>
      </PostUserInfo>
    </StPostUser>
  );
}

const StPostUser = styled.div`
  width: 350px;
  height: 200px;
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid #d7e0e6;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const PostUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  span {
    display: inline-block;
    width: 72px;
    height: 72px;
    background: #d9d9d9;
    border-radius: 50%;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 300;
    color: #333;
  }
`;

const PostUserInfo = styled.div`
  margin-left: 10px;

  dl {
    margin: 18px 0;
    display: flex;
    gap: 12px;
  }

  dt {
    font-size: 1.05rem;
    font-weight: 300;
    color: rgb(102, 103, 171, 0.8);
  }

  dd {
    font-size: 0.925rem;
    font-weight: bold;
    font-family: "Noto Sans KR";
    color: #333;
  }
`;
