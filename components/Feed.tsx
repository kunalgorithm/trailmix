import { Card, Spin, Row, Col } from "antd";
// import { useFeed, useMe } from "./util/hooks";
import { DeleteButton } from "./DeleteButton";
import { useFeed } from "./useFeed";
export const Feed = ({ feed }: { feed: any[] }) => {
  return feed ? (
    <Row>
      {feed.map(({ text }, i) => (
        <Col md={6} sm={8} xs={12}>
          <div className="card" key={i}>
            {/* <DeleteButton id={id}/> */}
            <h4>{text}</h4>
          </div>
        </Col>
      ))}
      <style jsx>{`
        .card {
          background-color: #fff;
          border-radius: 20px;
          box-shadow: rgba(176, 176, 176, 0.25) 0 0 13px 5px;
          box-sizing: border-box;
          color: #4b4b4b;
          font-family: Calibre;
          font-variant: tabular-nums;
          line-height: 25.144px;
          padding: 16px 20px;
          transition: box-shadow 0.25s ease-in-out;
          margin: 20px;
          display: flex;
          justify-content: center;
        }
        .card:hover {
          box-shadow: rgba(176, 176, 176, 0.4) 0 0 13px 5px;
        }
        h4 {
          font-size: 18px;
          margin-bottom: 0px;
        }
      `}</style>
    </Row>
  ) : (
    <Spin />
  );
};
