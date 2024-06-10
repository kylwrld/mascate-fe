import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function Chart({series, xAxisData}) {
    return (
        <BarChart
            sx={(theme) => ({
                [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: "#ffffff",
                        strokeWidth: 2,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                        fill: "#ffffff",
                    },
                },
                backgroundImage: `linear-gradient(rgba(${
                    theme.palette.mode === "dark"
                        ? "255,255,255"
                        : "255,255,255"
                }, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${
                    theme.palette.mode === "dark"
                        ? "255,255,255"
                        : "255,255,255"
                }, 0.1) 1px, transparent 1px)`,
                backgroundSize: "35px 35px",
                backgroundPosition: "20px 20px, 20px 20px",
            })}
            series={series}
            height={290}
            xAxis={[
                {
                    data: xAxisData,
                    scaleType: "band",
                },
                {
                    colorMap: {
                        type: "continuous",
                        min: "Segunda",
                        max: "Sexta",
                        color: ["green", "orange"],
                    },
                },
            ]}
            // barLabel={(item, context) => {
            //     return context.bar.height < 60 ? null : item.value?.toString();
            // }}
            colors={["#f97316", "#ffffff"]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            borderRadius={10}
        />
    );
}

export default Chart;
