import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import RefsAtom from "../recolis/RefsAtom";
import { useState, useEffect, useCallback } from "react";

const throttle = (callback, waitTime) => {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const Header = () => {
  const [refState, setRefState] = useRecoilState(RefsAtom);
  const { push } = useRouter();

  const [hide, setHide] = useState<boolean>(false);
  const [pageY, setPageY] = useState<number>(0);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 300);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => window.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  const scrollProfile = useCallback(() => {
    refState.profileref.current.scrollIntoView({ behavior: "smooth" });
  }, [refState]);
  const scrollProficiency = useCallback(() => {
    refState.proficiencyref.current.scrollIntoView({ behavior: "smooth" });
  }, [refState]);
  const scrollexperience = useCallback(() => {
    refState.experienceref.current.scrollIntoView({ behavior: "smooth" });
  }, [refState]);
  const scrollProject = useCallback(() => {
    refState.projectref.current.scrollIntoView({ behavior: "smooth" });
  }, [refState]);

  return (
    <HeaderWrapper className={hide && "hide"}>
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
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  transition: 0.4s ease-out;
  background-color: white;
  z-index: 1000;
  &.hide {
    transform: translateY(-80px);
  }
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
