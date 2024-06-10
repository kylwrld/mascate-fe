import React, { useState } from "react";
import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { BarLabel } from "@mui/x-charts/BarChart";

import { axisClasses } from "@mui/x-charts/ChartsAxis";

import Select from "react-select";

function RelatorioPage() {
    const style = {
        control: (styles, state) => ({
            ...styles,
            backgroundColor: "",
            borderRadius: 20,
            borderWidth: 1,
            padding: 2,
            fontFamily: "mulish",
            borderColor: state.isFocused ? "#f97316" : styles.borderColor,
            "&:hover": {
                borderColor: "#f97316",
            },
            boxShadow: "none",
            color: "white",
        }),
        placeholder: (styles) => ({ ...styles, color: "white" }),
        singleValue: (styles) => ({ ...styles, color: "white" }),
    };

    const [reportType, setReportType] = useState("Diário");

    const options = [
        { value: "daily", label: "Diário" },
        { value: "weekly", label: "Semanal" },
    ];

    const days = [
        { value: "segunda", label: "Segunda-feira" },
        { value: "terca", label: "Terça-feira" },
        { value: "quarta", label: "Quarta-feira" },
        { value: "quinta", label: "Quinta-feira" },
        { value: "sexta", label: "Sexta-feira" },
    ];

    console.log(reportType);

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-start items-center flex-wrap gap-5 md:gap-10 h-48 md:h-32 lg:h-20 px-8 border-b border-neutral-700">
                {/* <select className="font-mulish text-lg px-4 py-2 rounded-full border-[3px] border-orange-500 outline-none focus:ring-blue-500 appearance-none" defaultValue={"a"} value={reportType} onChange={(e) => setReportType(e.target.value)}> */}
                {/* <option value="daily">Selecione um relatório</option> */}
                {/* <option value="daily">Diário</option>
                    <option value="weekly">Semanal</option>
                </select>
                
                <select className="font-mulish text-lg px-4 py-2 rounded-full border-[3px] border-orange-500 outline-none focus:ring-blue-500 appearance-none" defaultValue={"a"} value={reportType} onChange={(e) => setReportType(e.target.value)}>
                    <option value="segunda">Segunda</option>
                    <option value="terca">Terça</option>
                    <option value="quarta">Quarta</option>
                    <option value="quinta">Quinta</option>
                    <option value="sexta">Sexta</option>
                </select> */}

                <Select
                    placeholder="Selecione um relatório"
                    className="basic-single"
                    classNamePrefix="select"
                    // isClearable={true}
                    styles={style}
                    name="color"
                    options={options}
                    onChange={(e) => setReportType(e.label)}
                />

                {reportType == "Diário" ? (
                    <Select
                        placeholder="Selecione um dia"
                        className="basic-single"
                        classNamePrefix="select"
                        // isClearable={true}
                        styles={style}
                        name="color"
                        options={days}
                    />
                ) : (
                    ""
                )}
            </div>

            {
                // reportType.value == "daily" ? () => {
                //     const day = ""
                // } :
                // reportType.value == "weekly" ? () => {
                //     const days = [
                //         { value: "segunda", label: "Segunda-feira" },
                //         { value: "terca", label: "Terça-feira" },
                //         { value: "quarta", label: "Quarta-feira" },
                //         { value: "quinta", label: "Quinta-feira" },
                //         { value: "sexta", label: "Sexta-feira" },
                //     ]
                // } : ""
                // reportType.value == "montly" ? () => {
                //     const month = [
                //         { value: "segunda", label: "Segunda-feira" },
                //         { value: "terca", label: "Terça-feira" },
                //         { value: "quarta", label: "Quarta-feira" },
                //         { value: "quinta", label: "Quinta-feira" },
                //         { value: "sexta", label: "Sexta-feira" },
                //     ]
                // } :
                // reportType.value == "yearly" ? () => {
                //     const days = [
                //         { value: "segunda", label: "Segunda-feira" },
                //         { value: "terca", label: "Terça-feira" },
                //         { value: "quarta", label: "Quarta-feira" },
                //         { value: "quinta", label: "Quinta-feira" },
                //         { value: "sexta", label: "Sexta-feira" },
                //     ]
                // } : ""
            }

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
                    [`.MuiChartsLegend-series text tspan`]: {
                        fill: "#ffffff",
                        fontFamily: "Inter",
                    },
                })}
                series={[
                    { data: [45, 20], label: "Coxinha" },
                    { data: [51, 25], label: "Pastel" },
                    { data: [45, 30], label: "Bolo" },
                    { data: [62, 70], label: "Pão-pizza" },
                    { data: [45, 10], label: "Pizza" },
                ]}
                xAxis={[{ data: ["Segunda", "Terça"], scaleType: "band" }]}
                barLabel={(item, context) => {
                    return context.bar.height < 60
                        ? null
                        : item.value?.toString();
                }}
                colors={["#f97316", "#ffffff"]}
                margin={{ top: 100, bottom: 30, left: 40, right: 10 }}
                borderRadius={10}
                height={500}
            />
        </div>
    );
}

export default RelatorioPage;
