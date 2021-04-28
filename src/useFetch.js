import { useState, useEffect } from "react"; //useState and useEffect is named exports of react
const useFetch = (url) => {                     //named exports are those for which we have to use the exact named whereas for default named we can use alias names
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {                    //useEffect takes Function and array as parameters.  useEffect (() => {};, [])
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch data.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [url]);
 
  return { data, isPending, error };
};
export default useFetch;