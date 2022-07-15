import styled from "styled-components";

const ProjectContent = () => {
  return (
    <ProjectWrapper>
      <ProjectTitleWrapper>Project</ProjectTitleWrapper>
    </ProjectWrapper>
  );
};

export default ProjectContent;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 0px 30px 6vw;
  height: 600px;
`;

const ProjectTitleWrapper = styled.p`
  font-family: "Bebas Neue", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  letter-spacing: 0.25em;
  color: #55a38b;
`;
