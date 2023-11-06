import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { err } from "react-native-svg/lib/typescript/xml";

export const HeartRateContext = createContext();

export const HeartRateProvider = ({ children }) => {
  const [heartRateData, setHeartRateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    //console.log('MALK');
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    console.log('starting');
    try {
      console.log('TRYING....');

      const response = await axios.post(
        "https://industrial.api.ubidots.com/api/v1.6/data/raw/series",
        {
          variables: ["65251115d8a6b0000e7a48aa"],
          columns: ["value.value", "timestamp"],
          join_dataframes: false,
        },
        {
          headers: {
            "X-Auth-Token": "BBFF-GXv7RpP79hRVYrVS2K3p5wvq6r52Kl",
            "content-type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setHeartRateData(response.data);
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        // The request was made, but the server responded with a non-2xx status code
        console.error("Server responded with an error:", error.response.status);
      } else if (error.request) {
        // The request was made, but there was no response from the server
        console.error("No response received from the server.");
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <HeartRateContext.Provider
      value={{
        heartRateData,
        setHeartRateData,
        loading,
        setLoading,
        isConnected,
        setIsConnected,
      }}
    >
      {children}
    </HeartRateContext.Provider>
  );
};
