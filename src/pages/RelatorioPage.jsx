import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
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
    const [reportData, setReportData] = useState(null);
    const [day, setDay] = useState("segunda");
    const [dayDisplay, setDayDisplay] = useState("Segunda-feira");
    const [loading, setLoading] = useState(true);

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

    const d = {
        "segunda":"Segunda-feira",
        "terca":"Terça-feira",
        "quarta":"Quarta-feira",
        "quinta":"Quinta-feira",
        "sexta":"Sexta-feira",
        "sabado":"Sábado-feira",
        "domingo":"Domingo-feira",
    }

    function handleData(reportType) {
        if (reportType == "Diário") {
            return (reportData) => {
                let newData = reportData.map((obj) => { return {data: [obj["quantidade"]], label: obj["nome"]} })
                setReportData(newData)
            }
        }
    }

    useEffect(() => {
        let date = new Date;
        var options = {
            weekday:"long"
        };

        date = new Intl.DateTimeFormat('pt-BR', options).format(date) // terça-feira
        let func = handleData("Diário")
        let index = date.indexOf("-")
        date = date.slice(0, index) // terça
        if (date == "terça") {date = "terca"} // terca
        
        setDayDisplay(d[date])
        
        const fetchRelatorio = async () => {
            try {
                const res = await fetch(
                    `https://mascate-be.onrender.com/api/relatorio/dia/${date}/`
                );
                const data = await res.json();
                func(data.pedidos)

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchRelatorio();
    }, []);
    
    async function handleDayChange(e) {
        setDay(e.value)
        setDayDisplay(e.label)
        try {
            const res = await fetch(
                `https://mascate-be.onrender.com/api/relatorio/dia/${e.value}/`
            );
            const data = await res.json();
            let newData = data.pedidos.map((obj) => { return {data: [obj["quantidade"]], label: obj["nome"]} })
            setReportData(newData)

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col h-full">
            {/* h-48 md:h-32 lg:h-20 */}
            <div className="flex justify-start items-center flex-wrap gap-5 md:gap-10 h-20 px-8 border-b border-neutral-700">
                {/* <Select
                    placeholder="Selecione um relatório"
                    className="basic-single"
                    classNamePrefix="select"
                    styles={style}
                    name="color"
                    options={options}
                    onChange={(e) => setReportType(e.label)}
                /> */}

                {/* {reportType == "Diário" ? (
                    <Select
                        placeholder="Selecione um dia"
                        className="basic-single"
                        classNamePrefix="select"
                        styles={style}
                        name="color"
                        options={days}
                        onChange={(e) => setDay(e.value)}
                    />
                ) : (
                    ""
                )} */}
                <Select
                        placeholder="Selecione um dia"
                        className="basic-single"
                        classNamePrefix="select"
                        isSearchable={false}
                        styles={style}
                        name="color"
                        options={days}
                        onChange={(e) => handleDayChange(e)}
                    />
            </div>
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
                    // [`.g[clip-path]`]: {
                    //     color: "black"
                    // },
                })}
                series={reportData != null ? reportData : []}
                xAxis={[{ data: [dayDisplay], scaleType: "band" }]}
                barLabel={(item, context) => {
                    return context.bar.height < 60
                        ? null
                        : item.value?.toString();
                }}
                colors={["#f97316", "#ffffff"]}
                margin={{ top: 210, bottom: 30, left: 40, right: 10 }}
                borderRadius={10}
                height={500}
            />
        </div>
    );
}

export default RelatorioPage;
