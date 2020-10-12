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
        <Col>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </Col>

        <Col>
          <Button htmlType="submit">Add to Mix</Button>
        </Col>
      </Row>
    </form>
  );
};
