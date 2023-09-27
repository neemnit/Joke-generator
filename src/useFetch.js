import { useEffect, useState } from "react";

// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [toggle, setToggle] = useState(true);
  const getJoke = async () => {
    try{
    const response = await fetch(url);
    const data1 = await response.json();
    setData(data1);
    
    }
    catch(error){
      setError(error)
    }
    finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    setLoading(true)
    getJoke();
  }, []);

  //It should return data returned from fetch, loading, error and getJoke
  return { data, loading, error, getJoke };
};
// export the useFetch hook as a default export
export default useFetch;
