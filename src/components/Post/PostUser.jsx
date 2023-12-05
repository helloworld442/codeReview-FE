import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostUser() {
  return (
    <StPostUser>
      <PostUserProfile>
        <span className="thumnail"></span>
        <div className="info">
          <h4 className="name">김민승</h4>
          <h4 className="rank">Javscript , React</h4>
        </div>
      </PostUserProfile>
    </StPostUser>
  );
}

const StPostUser = styled.div`
  width: 350px;
  height: 115px;
  padding: 24px 20px;
  box-sizing: border-box;
  border: 1px solid #d7e0e6;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const PostUserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  .thumnail {
    display: inline-block;
    width: 54px;
    height: 54px;
    background: #d9d9d9;
    border-radius: 50%;
  }

  .name {
    margin-bottom: 10px;
    font-size: 1.05rem;
    font-weight: 600;
    font-family: "Noto Sans KR";
    color: #333;
  }

  .rank {
    font-size: 0.825rem;
    font-weight: 600;
    font-family: "Noto Sans KR";
    color: rgb(102, 103, 171, 0.8);
  }
`;
