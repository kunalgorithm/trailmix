import { useState } from "react";
import { mutate } from "swr";

import { fetcher } from "./util/fetcher";
// import { useFeed, useMe } from "./util/hooks";
import { Button, message, Input, Row, Col } from "antd";
import { useFeed } from "./useFeed";

export const CreateForm = ({
  feed,
  setFeed,
}: {
  feed: any[];
  setFeed: any;
}) => {
  // const { feed, setFeed } = useFeed();
  const [input, setInput] = useState("");
  // console.log(feed);

  return (
    <form
      style={{ padding: "2rem", textAlign: "center" }}
      onSubmit={async (e) => {
        e.preventDefault();
        if (input.length < 1) {
          message.error("Oops! You can't create empty tasks in your mix.");
          return;
        }
        setFeed([{ text: input }, ...feed]);
        // if (!me || !me.username) {
        //   message.error("You must be logged in to add trail mix.");
        //   return;
        // }
        // mutate("/api/feed", [{ text: input, author: me }, ...feed], false);
        // fetcher("/api/tweet/create", {
        //   text: input,
        // });

        setInput("");
      }}
    >
      <Row justify="center">
        <Col md={8}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </Col>

        <Col>
          <button type="submit">Add to Mix</button>
        </Col>
      </Row>
      <style jsx>{`
        input {
          background-color: #f5f4f9;
          border-radius: 8px;
          border-width: 0;
          color: #454d57;
          cursor: text;
          font-family: "Plex", -apple-system, Arial, Sans-Serif;
          font-size: 14px;
          line-height: 22px;
          padding: 10px 12px 10px 32px;
          transition: background-color 0.3s, width 0.05s;
          width: 100%;
        }
        input:focus {
          background-color: #edebf4;
        }

        input:-webkit-input-placeholder {
          font-weight: 400;
        }

        input:placeholder {
          font-weight: 400;
        }

        button {
          background-color: #000;
          border-radius: 8px;
          border-width: 0;
          box-shadow: rgba(0, 0, 0, 0.4) 0 10px 10px -10px;
          color: #fff;
          cursor: pointer;
          font-family: "Plex", -apple-system, Arial, Sans-Serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-left: 10px;
          padding: 12px;
          text-align: center;
          text-transform: uppercase;
          transition: all 250ms ease-out;
          width: 100%;
        }
      `}</style>
    </form>
  );
};
