import React, { useContext, useState, useEffect } from "react";
import { LineChart } from "react-native-wagmi-charts";
import { DataContext } from "../../contexts/DataContext";

const Hr = () => {
  const { chartData } = useContext(DataContext);

  const [lineGraphWidth, setLineGraphWidth] = useState(250);
  // const data = chartData.map((dataPoint) => ({
  //   timestamp: dataPoint.created_at,
  //   value: parseInt(dataPoint.field1),
  // }));

  // Extract the values from chartData
  const columns = chartData.columns[0];
  const results = chartData.results[0];

  useEffect(() => {
    // Get the current user's details from Firestore
    // console.log('This is it ,',results.length);
    setLineGraphWidth(results.length * 35);
  }, []);

  // Get the indices of the timestamp and value columns
  const timestampIndex = columns.indexOf("timestamp");
  const valueIndex = columns.indexOf("64ac3f7bc06e0d000c600e47.value.value");

  // Create the data array expected by LineChart
  const data = results.map((result) => ({
    timestamp: result[timestampIndex],
    value: result[valueIndex],
  }));

  //  console.log("Data in the graph")
  //  console.log(data); // Log the data array to the console

  return (
    <LineChart.Provider data={data}>
      <LineChart width={1000} height={200}>
        {/* // from react-native//width={lineGraphWidth} */}

        <LineChart.Path color="red" strokeWidth={0} />
        <LineChart.CursorCrosshair>
          <LineChart.Tooltip />
          <LineChart.Tooltip position="bottom">
            <LineChart.DatetimeText />
          </LineChart.Tooltip>
        </LineChart.CursorCrosshair>
      </LineChart>
    </LineChart.Provider>
  );
};

export default Hr;
