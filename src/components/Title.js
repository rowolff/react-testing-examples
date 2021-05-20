import React, { useState, useEffect } from "react";
import { getTitle } from "../api";

const Title = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getTitleAsync = async () => {
      const [apiTitle, apiError] = await getTitle();
      if (apiError) {
        return setError(apiError);
      } else {
        setLoading(false);
        setTitle(apiTitle);
      }
    };
    getTitleAsync();
  }, []);

  if (error) {
    return <h2>There was a horrible error</h2>;
  }

  return <h1>{loading ? "Loading ..." : title}</h1>;
};

export default Title;
