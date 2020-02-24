import React from "react";
import Head from "next/head";
import { Row, Col } from "antd";
import Results from "../components/Results";
import Options from "../components/Options";

function Index() {
  return (
    <div className="app">
      <Head>
        <title>Karar Çarkı | Arada Derede Kalmayın Diye!</title>
      </Head>
      <Row>
        <Col span={24} md={12} className="col">
          <Options/>
        </Col>
        <Col span={24} md={12} className="col">
          <Results/>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
