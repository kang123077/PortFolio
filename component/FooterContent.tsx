import styled from "styled-components";
import Image from "next/image";
import FooterImage from "../public/image/FooterImage.png";

const FooterContent = () => {
  return (
    <FooterWrapper>
      <Image src={FooterImage} width={1920} height={400}></Image>
      <FooterTextWrapper>Made by MJ the Dinosour Man</FooterTextWrapper>
    </FooterWrapper>
  );
};

export default FooterContent;

const FooterWrapper = styled.div``;

const FooterTextWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100px;
  font-family: "Bebas Neue", cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  letter-spacing: 0.2em;
  color: #55a38b;
`;
