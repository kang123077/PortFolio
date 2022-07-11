import { useRouter } from "next/router";
import styled from "styled-components";

const Header = () => {
  const { push } = useRouter();
  return (
    <HeaderWrapper>
      <TitleWrapper onClick={() => push("/")}>
        &lt; Dinasour Man / &gt;
      </TitleWrapper>
      <MenuWrapper>
        <MenuButtonWrapper onClick={() => push("")}>Profile</MenuButtonWrapper>
        <MenuButtonWrapper onClick={() => push("")}>
          Proficiency
        </MenuButtonWrapper>
        <MenuButtonWrapper onClick={() => push("")}>
          Experiences
        </MenuButtonWrapper>
        <MenuButtonWrapper onClick={() => push("")}>Project</MenuButtonWrapper>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.a`
  display: flex;
  cursor: pointer;
  margin: 20px 0px 20px 30px;
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-family: "Bebas Neue", cursive;
  font-size: 32px;
  color: #55a38b;
`;

const MenuWrapper = styled.div`
  display: flex;
  padding: 20px 30px 20px 0px;
  height: 40px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 40px;
`;

const MenuButtonWrapper = styled.a`
  cursor: pointer;
  padding: 6px 0px 0px 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #000000;
`;
