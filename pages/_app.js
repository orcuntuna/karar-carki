import React from "react";
import {Provider} from "mobx-react";
import stores from "../stores";
import "antd/dist/antd.min.css";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return <Provider store={stores}><Component {...pageProps} /></Provider>;
}

export default MyApp;
