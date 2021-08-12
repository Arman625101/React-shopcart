import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://localhost:3000";

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const source = axios.CancelToken.source();

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);
    if (path === "/") {
      source.cancel();
    }
    axios
      .get(url + path, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Awkward..");
      });
    return () => {
      source.cancel();
    };
  }, [path]);

  return { data, loading, error };
};

export default useFetch;
