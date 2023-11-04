import React, { useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { Text, Dimensions, View, Button } from "react-native";
import { DataContext } from "../../contexts/DataContext";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";


const Graph = () => {
  const { chartData, loading, setLoading } = useContext(DataContext);
  const navigate = useNavigation();

  const [lineGraphWidth,setLineGraphWidth] = useState(250);



  let labels = [];
  let data = [];
  
  if (!loading) {

    if (chartData && chartData.results && chartData.results[0] && chartData.results[0].length > 0) {
      setLoading(false);
      const rawData = chartData.results[0];

      // console.log(rawData);
      data = rawData.map(([value, label]) => ({
        value,
        label,
      }));

      // console.log(data);

      // console.log("This is data ", data);
      labels = data.map((item) => item.label);
      data = data.map((item) => item.value);
      // console.log("labels ", labels);
      // console.log("data ", data);
      
    } else {
      labels = [""];
      data = [0];
    }
  }


 

  // const MyLineChart = ({
  //   data,
  //   width,
  //   height,
  //   xAxisLabel,
  //   yAxisLabel,
  //   yAxisSuffix,
  //   yAxisInterval,
  //   chartConfig,
  // }) => {
  //   return (
  //     <LineChart
  //     data={{
  //       labels: data.map(item => item.label),
  //       datasets: [
  //         {
  //           data: data.map(item => item.value),
  //         },
  //       ],
  //     }}
  //       width={width}
  //       height={height}
  //       xLabels={labels} // Pass the labels to xLabels prop
  //       xAxisLabel={xAxisLabel}
  //       yAxisLabel={yAxisLabel}
  //       yAxisSuffix={yAxisSuffix}
  //       yAxisInterval={yAxisInterval}
  //       chartConfig={chartConfig}
  //       withDots={true}
  //       style={{
  //         marginVertical: 8,
  //         borderRadius: 16,
  //       }}
  //     />
  //   );
  // };

  return (
    <View>
      {!loading ? (
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
                withDots: false ,
                color: (opacity = 1) => `rgba(230, 0, 0, ${opacity})`, // Solid red color
              },
            ],
          }}
          width={1000} // from react-native
          height={300}
          yAxisLabel={""}
          xAxisLabel={""}
          chartConfig={{
            backgroundColor: "#1cc510",
            backgroundGradientFrom: "#eff3ff",
            backgroundGradientTo: "#efefef",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(77, 166, 255, ${opacity})`, // Solid red color
            strokeWidth: 2,
            style: {
              borderRadius: 15,
            },
            propsForVerticalLabels: {
              fill: "red", // Set the color to yellow
            },
          }}
          bezier
          yAxisInterval={1}
          stickyYAxis={true}
          formatXLabel={(value) => {
            const date = new Date(value);
            const seconds = date.getSeconds();
            return ``; //`${seconds}s`
          }}
          style={{
            marginVertical: 5,
            borderRadius: 0,
          }}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

export default Graph;
