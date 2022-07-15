import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import RefsAtom from "../recolis/RefsAtom";
import { useCallback, useState, useLayoutEffect, useEffect, useRef } from "react";
import { useThrottle, useDebounce } from "../utils/functions";

const Header = () => {
  const [scrollCheck, setScrollCheck] = useState<boolean>(false);
  const layoutRef = useRef<HTMLElement>(null);
  const [prevY, setPrevY] = useState<number>(layoutRef.current.scrollTop);
  const [refState, setRefState] = useRecoilState(RefsAtom);

  const handleScroll = useCallback((e) => {
    const diff = e.target.scrollTop - prevY
    if (diff > 0) {
      setIsHeaderShow(false)
    } else if (diff < 0) {
      setIsHeaderShow(true)
    }
    setPrevY(e.target.scrollTop)
  }, [prevY]);

  const stopScroll = useCallback((e) => {
    if (e.target.scrollTop === 0) {
      setIsHeaderShow(true)
    } else {
      setIsHeaderShow(false)
    }
  }, []);

  const throttleScroll = useThrottle({func : handleScroll, wait : 300});
  const debounceScroll = useDebounce(stopScroll, 1500);

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
    <section ref={layoutRef}>
      <HeaderWrapper>
        <TitleWrapper onClick={() => push(`/`)}>
          {`<`} Dinasour Man / {`>`}
        </TitleWrapper>
        <MenuWrapper>
          <MenuButtonWrapper onClick={scrollProfile}>Profile</MenuButtonWrapper>
          <MenuButtonWrapper onClick={scrollProficiency}>
            Proficiency
          </MenuButtonWrapper>
          <MenuButtonWrapper onClick={scrollProject}>Project</MenuButtonWrapper>
          <MenuButtonWrapper onClick={scrollexperience}>
            Experiences
          </MenuButtonWrapper>
        </MenuWrapper>
      </HeaderWrapper>
    </section>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  transition: transform 1s;
  transform: initial;
  background-color: white;
  z-index: 1000;
`;
HeaderWrapper.scrollDown = styled.div`
  transform: translate(0, -80px);
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
