import styled from "styled-components";
import ProfileContent from "../component/ProfileContent";
import ProficiencyContent from "../component/ProficiencyContent";
import ProjectContent from "../component/ProjectContent";
import ExperienceContent from "../component/ExperienceContent";

const Index = () => {
  return (
    <MainWrapper>
      <ProfileContent />
      <ProficiencyContent />
      <ProjectContent />
      <ExperienceContent />
    </MainWrapper>
  );
};

export default Index;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
