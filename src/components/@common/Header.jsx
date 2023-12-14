import styled from "styled-components";
import { ReactComponent as User } from "../../assets/user-regular.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [getActive, getRoutes] = usePathname();

  return (
    <StHeader>
      <HeaderNav>
        <HeaderLogo href="/">별무리</HeaderLogo>

        <HeaderMenu>
          <a href="/" className={getActive("/")}>
            카테고리
          </a>
          <a href="/write" className={getActive("/write")}>
            글 남기기
          </a>
          <a onClick={() => alert("아직 완성되지 않는 기능입니다")}>블로그</a>
          <a href="https://discord.gg/RnD7HP6wQD">F & A</a>
        </HeaderMenu>

        <HeaderIcon href="/user/signin">
          <User />
        </HeaderIcon>
      </HeaderNav>

      <HeaderPath>{getRoutes()}</HeaderPath>
    </StHeader>
  );
}

function usePathname() {
  const { pathname } = useLocation();

  const getActive = (target) => {
    if (pathname === target) return "active";

    return "";
  };

  const getRoutes = () => {
    if (pathname.includes("category")) {
      return "홈  >  카테고리";
    }

    if (pathname.includes("posts")) {
      return "홈  >  카테고리  >  커뮤니티";
    }

    if (pathname.includes("write")) {
      return "홈  >  글 남기기";
    }
  };

  return [getActive, getRoutes];
}

const StHeader = styled.header`
  width: 100%;
  height: auto;
`;

const HeaderNav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderPath = styled.pre`
  font-size: 0.725rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: rgb(179, 173, 178);
  text-align: right;
`;

const HeaderLogo = styled.a`
  font-size: 1.25rem;
  font-weight: 300;
  color: rgb(102, 103, 171, 0.8);
  cursor: pointer;
`;

const HeaderMenu = styled.ul`
  display: flex;
  gap: 36px;
  font-size: 0.825rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  .active {
    color: rgb(102, 103, 171, 0.8);
  }
`;

const HeaderIcon = styled.a`
  display: inline-block;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
`;
