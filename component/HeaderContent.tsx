import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import RefsAtom from "../recolis/RefsAtom";

interface refType {
  refs: React.RefObject<HTMLElement>;
}

const Header = () => {
  const [refState, setRefState] = useRecoilState(RefsAtom);

  const { push } = useRouter();

  const scrollProfile = () => {
    refState.profileref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollProficiency = () => {
    refState.proficiencyref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollexperience = () => {
    refState.experienceref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollProject = () => {
    refState.projectref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeaderWrapper>
      <TitleWrapper onClick={() => push("/")}>
        &lt; Dinasour Man / &gt;
      </TitleWrapper>
      <MenuWrapper>
        <MenuButtonWrapper onClick={scrollProfile}>Profile</MenuButtonWrapper>
        <MenuButtonWrapper onClick={scrollProficiency}>
          Proficiency
        </MenuButtonWrapper>
        <MenuButtonWrapper onClick={scrollProject}>Project</MenuButtonWrapper>{" "}
        <MenuButtonWrapper onClick={scrollexperience}>
          Experiences
        </MenuButtonWrapper>
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
