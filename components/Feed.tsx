import { Card, Spin, Row, Col } from "antd";
// import { useFeed, useMe } from "./util/hooks";
import { DeleteButton } from "./DeleteButton";
import { useFeed } from "./useFeed";
export const Feed = ({ feed }: { feed: any[] }) => {
  return feed ? (
    <Row>
      {feed.map(({ text }, i) => (
        <Col md={4}>
          <Card key={i}>
            {/* <DeleteButton id={id}/> */}
            <h4>{text}</h4>
            {/* <span>{author.username}</span> */}
          </Card>
        </Col>
      ))}
    </Row>
  ) : (
    <Spin />
  );
};
