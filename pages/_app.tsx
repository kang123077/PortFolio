import "../styles/global.css";
import HeaderContent from "../component/HeaderContent";
import FooterContent from "../component/FooterContent";
import { RecoilRoot } from "recoil";
import ModalContent from "../component/ModalContent";

function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <ModalContent />
        <HeaderContent />
        <Component {...pageProps} />
        <FooterContent />
      </RecoilRoot>
    </>
  );
}

export default App;
