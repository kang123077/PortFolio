import styled from "styled-components";
import MJphoto from "../public/image/MJphoto.png";
import Image from "next/image";

const ProfileContent = () => {
  return (
    <ProfileWrapper>
      <ProfileThumbWrapper>
        <Image src={MJphoto} width={200} height={150} />
        Profile
      </ProfileThumbWrapper>
    </ProfileWrapper>
  );
};

export default ProfileContent;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 0px 30px 6vw;
  height: 600px;
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
