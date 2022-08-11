import ContainerLayout from "../Layouts/ContainerLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContainerLayout>
      <Component {...pageProps} />
    </ContainerLayout>
  );
}

export default MyApp;
