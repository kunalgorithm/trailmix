import { Col, Row, Divider } from "antd";
import { Feed } from "../components/Feed";
import { Profile } from "../components/Profile";
import { CreateForm } from "../components/CreateForm";
import Head from "next/head";
import { useState } from "react";
const Page = () => {
  const [feed, setFeed] = useState([]);

  return (
    <Row>
      <Head>
        <title>Trail Mix 🥣</title>
      </Head>
      {/* <Col md={{ span: 6, offset: 2 }} xs={{ span: 12, offset: 2 }}> */}
      {/* <Profile /> */}
      {/* </Col> */}
      <Col md={{ span: 20 }} xs={{ span: 20, offset: 2 }}>
        <h2 style={{ marginTop: "1rem" }}>Welcome to Trail Mix!</h2>
        <p>
          Read more about the trail mix method{" "}
          <a href="https://daliakatan.com/trailmix"> here.</a>
        </p>
        <p>
          This app is currently under development, and you'll tragically lose
          all progress if you refresh or leave the screen.
        </p>
        <CreateForm feed={feed} setFeed={setFeed} />
        <Feed feed={feed} />
      </Col>
    </Row>
  );
};
export default Page;
