import styled from "styled-components";
import { device } from "../utils/media";
import Header from "../components/@common/Header";

export default function CategoryLayout({ children }) {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  left: 50%;
  width: 1150px;
  height: auto;
  padding: 0 36px;
  box-sizing: border-box;
  transform: translateX(-50%);

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }
`;
