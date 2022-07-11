import styled from "styled-components";

const ExperienceContent = () => {
  return (
    <ExperienceWrapper>
      <ExperienceTitleWrapper>Experience</ExperienceTitleWrapper>
    </ExperienceWrapper>
  );
};

export default ExperienceContent;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 0px 30px 6vw;
  height: 600px;
`;

const ExperienceTitleWrapper = styled.p`
  font-family: "Bebas";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  letter-spacing: 0.25em;
  color: #55a38b;
`;
