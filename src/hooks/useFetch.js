import { useEffect, useState } from "react";

const useFetch = (route) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${route}`, {
          signal: abortController.signal,
        });
        const jsonData = await response.json();

        setData(jsonData.output);
      } catch (error) {
        if (!error.name === "AbortError") console.log(error);
      }
    };

    fetchPosts();

    return () => abortController.abort();
  }, [route]);

  return [data, setData];
};

export default useFetch;
