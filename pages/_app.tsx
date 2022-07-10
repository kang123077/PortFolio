import "../styles/global.css";
import Header from "../component/Header";

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default App;
