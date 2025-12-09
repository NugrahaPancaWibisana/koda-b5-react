import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(
      () =>
        (async () => {
          try {
            const res = await fetch(url);
            if (!res.ok) throw Error(`${res.status}: ${res.statusText || "Not Found"}`);

            setLoading(false);
            setData((await res.json()).results || []);
          } catch (error) {
            setLoading(true);
            setError(error.message);
          }
        })(),
      5000
    );
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
