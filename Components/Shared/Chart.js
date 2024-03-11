import { View, Dimensions, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Chart = () => {
  const screenWidth = Dimensions.get("window").width - 10;

  return (
    <TouchableOpacity style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
          datasets: [
            {
              data: [20, 10, 50, 87, 47, 28, 90],
            },
          ],
        }}
        width={screenWidth} // from react-native
        height={275}
        yAxisLabel="$" //dollar sign
        yAxisSuffix="k" // RS sign
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#FFFFFF",
          backgroundGradientFrom: "#FFFFFF",
          backgroundGradientTo: "#FFFFFF",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: () => `#318CE7`,
          labelColor: () => `#318CE7`,
          style: {
            // custom styles
          },
          propsForDots: {
            // bar line props
            r: "4",
            strokeWidth: "2",
            stroke: "#87CEFA",
          },
        }}
        bezier // for curved lines
        withShadow={true} //bar lines shadow
        withInnerLines={false} // inner graph lines
        withOuterLines={false} // outer graph lines
        style={{
          borderRadius: 16,
        }}
      />
    </TouchableOpacity>
  );
};

export default Chart;
