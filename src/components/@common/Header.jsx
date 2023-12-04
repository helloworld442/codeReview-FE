import styled from "styled-components";
import { ReactComponent as User } from "../../assets/user-regular.svg";
import { useLocation } from "react-router-dom";
import { device } from "../../utils/media";

export default function Header() {
  const { pathname } = useLocation();
  const path = usePathname(pathname);

  return (
    <StHeader>
      <HeaderNav>
        <HeaderLogo href="/">별무리</HeaderLogo>

        <HeaderMenu>
          <a
            href="/category"
            className={pathname === "/category" ? "active" : null}
          >
            카테고리
          </a>
          <a href="/write" className={pathname === "/write" ? "active" : null}>
            글 남기기
          </a>
          <a>소개글</a>
          <a>문의하기</a>
        </HeaderMenu>

        <HeaderIcon href="/user/signin">
          <User />
        </HeaderIcon>
      </HeaderNav>

      <HeaderPath>{path}</HeaderPath>
    </StHeader>
  );
}

function usePathname(pathname) {
  if (pathname.includes("category")) {
    return "홈  >  카테고리";
  }

  if (pathname.includes("posts")) {
    return "홈  >  카테고리  >  커뮤니티";
  }

  if (pathname.includes("write")) {
    return "홈  >  글 남기기";
  }

  if (pathname.includes("signin")) {
    return "홈  >  로그인";
  }

  if (pathname.includes("signup")) {
    return "홈  >  회원가입";
  }

  if (pathname.includes("post")) {
    return "홈  >  커뮤니티  >  상세페이지";
  }
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

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
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

  @media ${device.mobile} {
    display: none;
  }
`;

const HeaderIcon = styled.a`
  display: inline-block;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }

  @media ${device.mobile} {
    display: none;
  }
`;
