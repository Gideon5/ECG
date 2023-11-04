import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { err } from "react-native-svg/lib/typescript/xml";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [chartData, setChartData] = useState([]);
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
      console.log('TRYING');

      const response = await axios.post(
        "https://industrial.api.ubidots.com/api/v1.6/data/raw/series",
        {
          variables: ["64ac3f7bc06e0d000c600e47"],
          columns: ["value.value", "timestamp"],
          join_dataframes: false,
        },
        {
          headers: {
            "X-Auth-Token": "BBFF-5NfxNdrZbZ0NXMomJvxIsIJEtFGwLN",
            "content-type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setChartData(response.data);
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
    <DataContext.Provider
      value={{
        chartData,
        setChartData,
        loading,
        setLoading,
        isConnected,
        setIsConnected,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
