import React from "react";
import { ResponsivePie } from "@nivo/pie";

import TokenSupplyData from "./ChartData";

import { Title, Wrapper } from "./styled";

const TokenSupply: React.FC = () => {
  const fillOption = TokenSupplyData.map((data) => {
    return {
      match: {
        id: data.id,
      },
      id: "dots",
    };
  });

  return (
    <>
      <Title>Token Distribution</Title>
      <Wrapper>
        <ResponsivePie
          data={TokenSupplyData}
          margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={50}
          activeInnerRadiusOffset={50}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 3]],
          }}
          arcLinkLabel={(d) => `${d.label} (${d.value}%)`}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#fff"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          valueFormat={(value) => `${value} %`}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
          ]}
          fill={fillOption}
          motionConfig="stiff"
          // legends={[
          //   {
          //     anchor: "right",
          //     direction: "column",
          //     justify: false,
          //     translateX: 0,
          //     translateY: 0,
          //     itemsSpacing: 0,
          //     itemWidth: 100,
          //     itemHeight: 18,
          //     itemTextColor: "#fff",
          //     itemDirection: "left-to-right",
          //     itemOpacity: 1,
          //     symbolSize: 10,
          //     symbolShape: "circle",
          //     // effects: [
          //     //   {
          //     //     on: "hover",
          //     //     style: {
          //     //       itemTextColor: "#000",
          //     //     },
          //     //   },
          //     // ],
          //   },
          // ]}
        />
      </Wrapper>
    </>
  );
};

export default TokenSupply;
