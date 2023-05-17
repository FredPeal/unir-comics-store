import { useState, useEffect } from 'react';
import MD5 from "crypto-js/md5";
import axios  from "axios";

const useAxios = () => {


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [controller, setController] = useState();

  const API_REQUEST = async (config, callback) => {
    const { AxiosInstance, method, url, requestConfig } = config;
    let apiKey = process.env.REACT_APP_API_PUBLIC_KEY;
    let privateKey = process.env.REACT_APP_API_SECRET_KEY;
    let ts = 1000;
    let hash =(MD5(`${ts}${privateKey}${apiKey}`).toString());

    let fullUrl = `https://gateway.marvel.com/v1/public/${url}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=5`

    try {
      setLoading(true);
      setError(null);
      setData([]);
      const ctrl = new AbortController();
      setController(ctrl);

      const response = await axios({
        method: method,
        url: fullUrl,
      });
      setData(response.data);
      callback(response.data);
    } catch (error) {
      console.error({ error });
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return { loading, error, data, API_REQUEST };
};

export default useAxios;