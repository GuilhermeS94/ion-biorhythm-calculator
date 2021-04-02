import React from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    XAxis
} from "recharts";
import { biorhythmsSeries } from "../utils/biorhythmcalculos";
import dayjs from "dayjs";
import "./BiorhythmGrafico.css";

function formatarData(dataISOstring){
    return dayjs(dataISOstring).format("DD/MM");
}

function BiorhythmGrafico({ dataNascimento, dataAlvo }){
    
    const dataInicio = dayjs(dataAlvo).subtract(15, "days").toISOString();
    const dados = biorhythmsSeries(dataNascimento, dataInicio, 31)
    .map((item) => ({ ...item, dia: formatarData(item.dia)}));
    return (
        <ResponsiveContainer className="biorhythm-grafico" width="100%" height={200}>
            <LineChart data={dados}>
                <XAxis dataKey="dia" 
                ticks={[dados[3].dia, dados[15].dia, dados[27].dia]}
                />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <ReferenceLine x={dados[15].dia} />
                <Line dot={false} type="natural" dataKey="fisico" className="fisico"/>
                <Line type="natural" dataKey="emocional" className="emocional"/>
                <Line type="natural" dataKey="intelectual" className="intelectual"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorhythmGrafico;