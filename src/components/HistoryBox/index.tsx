import React from "react";
import {
    ResponsiveContainer, LineChart,
    Line, XAxis, Tooltip, CartesianGrid
} from "recharts";
import {Container, ChartContainer, Header, LegendContainer, Legend} from "./styles";
import formatCurrency from "../../utils/formatCurrency";

interface IHistoryBoxProps {
    data: {
        month: string,
        amountEntry: number,
        amountOutput: number,
    } [],
    lineColorAmountEntry: string,
    lineColorAmountOutput: string,
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
                                                    data, lineColorAmountEntry,
                                                    lineColorAmountOutput
                                                }) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>
            <LegendContainer>
                <Legend color={lineColorAmountEntry}>
                    <div>30%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color={lineColorAmountOutput}>
                    <div></div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </Header>

        <ChartContainer>
            <ResponsiveContainer>
                <LineChart data={data} margin={{top: 5, right: 20, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                    <XAxis dataKey="month" stroke="#cecece"/>
                    <Tooltip formatter={(value) => formatCurrency(Number(value))}/>
                    <Line dataKey="amountEntry" type="monotone"
                          name="Entradas" stroke="#f7931b"
                          strokeWidth={5} dot={{r: 5}} activeDot={{r: 8}}/>
                    <Line dataKey="amountOutput" type="monotone"
                          name="Saídas" stroke="#e44c4e"
                          strokeWidth={5} dot={{r: 5}} activeDot={{r: 8}}/>
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    </Container>
);
export default HistoryBox;