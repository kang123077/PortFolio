import "../styles/global.css";
import HeaderContent from "../component/HeaderContent";

function App({ Component, pageProps }) {
  return (
    <>
      <HeaderContent />
      <Component {...pageProps} />
    </>
  );
}

export default App;
