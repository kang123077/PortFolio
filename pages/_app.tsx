import "../styles/global.css";
import HeaderContent from "../component/HeaderContent";
import FooterContent from "../component/FooterContent";

function App({ Component, pageProps }) {
  return (
    <>
      <HeaderContent />
      <Component {...pageProps} />
      <FooterContent />
    </>
  );
}

export default App;
