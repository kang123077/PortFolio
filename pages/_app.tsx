import "../styles/global.css";
import HeaderContent from "../component/HeaderContent";
import FooterContent from "../component/FooterContent";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <HeaderContent />
        <Component {...pageProps} />
        <FooterContent />
      </RecoilRoot>
    </>
  );
}

export default App;
