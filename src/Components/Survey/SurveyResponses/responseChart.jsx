import React from "react";
import { Pie } from "@nivo/pie";

const data = [
  { id: "yes", label: "yes", value: 6, color: "hsl(230,60%,50%)" },
  { id: "no", label: "yes", value: 10, color: "hsl(94,70%,50%)" },
];
export default function ResponseChart(props) {
  return (
    <div style={{ marginTop: "2rem" }}>
      {props.questionType !== "textAnswer" ? (
        <Pie
          width={300}
          height={300}
          data={data}
          margin={{
            top: 40,
            right: 40,
            bottom: 80,
            left: 40,
          }}
        />
      ) : (
        <>
          <div className="response__block">
            <p>Rachael</p>
          </div>
          <div className="response__block">
            <p>Rachael</p>
          </div>
        </>
      )}
    </div>
  );
}
