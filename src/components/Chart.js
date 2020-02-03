import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);

    //data is only hardcoded for example purposes. Data should be pulled in dynamically from an async request when the component mounts.
    var data = [617594, 700000, 153060, 106519, 705162, 95072];

    // // var data = null
    // // componentDidMount(){
    //     async request will be done here to fetch the data when the componenet mounts.
    // // }

    //if the data is above 600,000 then it will display as red in the chart, otherwise it will be green. Set your own parameters below. The function below will map over the data array and return an new array which is referenced in the backgroundColor of the chartData.
    var colors = () =>
      data.map(function(c) {
        return c > 600000 ? "rgb(139,0,0)" : "rgba(144,238,144)";
      });

    // the position of the different labels in the labels array correspond to the backgroundColor array positions. i.e. labels[0] will have the background color of backgroundColorr[0].
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Spingfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "population",
            data: data,
            backgroundColor: colors()
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Columba Date Review"
            }
          }}
        />
      </div>
    );
  }
}
export default Chart;
