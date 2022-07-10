import { useRouter } from "next/router";
import styled from "styled-components";

const Header = () => {
  const { push } = useRouter();
  return (
    <HeaderWrapper>
      <HeaderLinkWrapper onClick={() => push("/")}>Home</HeaderLinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const HeaderLinkWrapper = styled.a`
  cursor: pointer;
`;
