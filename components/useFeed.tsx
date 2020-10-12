import { useState } from "react";

export function useFeed() {
  const [feed, setFeed] = useState([]);
  return { feed, setFeed };
}
