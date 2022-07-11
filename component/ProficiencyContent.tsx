import styled from "styled-components";

const ProficiencyContent = () => {
  return (
    <ProficiencyWrapper>
      <ProficiencyTitleWrapper>Proficiency</ProficiencyTitleWrapper>
    </ProficiencyWrapper>
  );
};

export default ProficiencyContent;

const ProficiencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 0px 30px 6vw;
  height: 600px;
`;

const ProficiencyTitleWrapper = styled.p`
  font-family: "Bebas";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  letter-spacing: 0.25em;
  color: #55a38b;
`;
