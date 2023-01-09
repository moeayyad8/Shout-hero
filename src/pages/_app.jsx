import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "../redux/store";
import Script from "next/script";
import Head from "next/head";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';
import SEO from "../components/seo";

{/* Google tag (gtag.js) 

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QZJLWWCNKV%22%3E"</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QZJLWWCNKV');
</script>
*/}

function MyApp({ Component, pageProps }) {

  return (
      <Provider store={store}>
        <Component {...pageProps} />
  
        <ToastContainer />
      </Provider>
  )
}

export default MyApp
