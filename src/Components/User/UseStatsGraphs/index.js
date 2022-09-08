import React from "react";
import { VictoryPie, VictoryChart } from "victory";
import { Graph, GraphItem, Total } from "./styles";

const UseStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
    );

    setGraph(graphData);
  }, [data]);

  return (
    <Graph className="animeLeft">
      <Total>
        <GraphItem>
          <p>Acessos: {total}</p>
        </GraphItem>
      </Total>
      <GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#ffff", //Linha branca
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </GraphItem>
      <GraphItem>
        <VictoryChart alignment="start" data={graph}></VictoryChart>
      </GraphItem>
    </Graph>
  );
};

export default UseStatsGraphs;
