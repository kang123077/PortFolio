import styled from "styled-components";
import MJphoto from "../public/image/MJphoto.png";
import Image from "next/image";

const MainSectionContent = (props) => {
  switch (props.title) {
    case "Profile":
      return (
        <MainSectionWrapper>
          <ProfileThumbWrapper>
            <Image src={MJphoto} width={200} height={150} z-index={1} />
            {props.title}
          </ProfileThumbWrapper>
        </MainSectionWrapper>
      );
    case "Proficiency":
      return (
        <MainSectionWrapper>
          <ProfileThumbWrapper>
            {props.title}
          </ProfileThumbWrapper>
        </MainSectionWrapper>
      );
    case "Project":
      return (
        <MainSectionWrapper>
          <ProfileThumbWrapper>
            {props.title}
          </ProfileThumbWrapper>
        </MainSectionWrapper>
      );
    case "Experience":
      return (
        <MainSectionWrapper>
          <ProfileThumbWrapper>
            {props.title}
          </ProfileThumbWrapper>
        </MainSectionWrapper>
      );
    default:
      return (
        <MainSectionWrapper>
          <TitleWrapper>{props.title}</TitleWrapper>
        </MainSectionWrapper>
      );
  }
};

export default MainSectionContent;

const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 80px 0px 30px 6vw;
  height: 600px;
  width: 90vw;
`;

const ProfileThumbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Bebas Neue", cursive;
  font-size: 42px;
  color: #55a38b;
  letter-spacing: 0.4em;
`;

const TitleWrapper = styled.p`
  font-family: "Bebas Neue", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  letter-spacing: 0.25em;
  color: #55a38b;
`;
