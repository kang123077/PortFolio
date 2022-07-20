import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import ProfileContent from "../component/ProfileContent";
import ProficiencyContent from "../component/ProficiencyContent";
import ProjectContent from "../component/ProjectContent";
import ExperienceContent from "../component/ExperienceContent";
import RefsAtom from "../recolis/RefsAtom";
import MainSectionContent from "../component/MainSectionContent";

const Index = () => {
  const [refState, setRefState] = useRecoilState(RefsAtom);

  const profileRef = useRef<HTMLElement>(null);
  const proficiencyRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setRefState({
      profileref: profileRef,
      experienceref: experienceRef,
      proficiencyref: proficiencyRef,
      projectref: projectRef,
    });
  }, [profileRef, proficiencyRef, projectRef, experienceRef]);

  return (
    <MainWrapper>
      <section ref={profileRef}>
        <MainSectionContent title="Profile" />
      </section>
      <section ref={proficiencyRef}>
        <MainSectionContent title="Proficiency" />
      </section>
      <section ref={projectRef}>
        <MainSectionContent title="Project" />
      </section>
      <section ref={experienceRef}>
        <MainSectionContent title="Experience" />
      </section>
    </MainWrapper>
  );
};

export default Index;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
