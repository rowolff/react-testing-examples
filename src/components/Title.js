import React, { useState, useEffect } from "react";

const Title = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Horrible Error!");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        return setTitle(data.title);
      })
      .catch((e) => setError(e));
  }, []);

  if (error) {
    return <h2>There was a horrible error</h2>;
  }

  return <h1>{loading ? "Loading ..." : title}</h1>;
};

export default Title;
