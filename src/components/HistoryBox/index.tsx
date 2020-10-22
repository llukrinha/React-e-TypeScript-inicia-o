import React from "react";
import {
    ResponsiveContainer, LineChart,
    Line, XAxis, Tooltip, CartesianGrid
} from "recharts";
import {Container} from "./styles";

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
                                                    data, lineColorAmountEntry, lineColorAmountOutput
                                                }) => (
    <Container>
        <h2>Histórico de saldo</h2>

        <ResponsiveContainer>
            <LineChart data={[]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece"/>
                <XAxis dataKey="month" stroke="#cecece"/>
                <Tooltip/>
                <Line dataKey="amountEntry" type="monotone"
                      name="Entradas" stroke="#f7931b"
                      strokeWidth={5} dot={{r: 5}} activeDot={{r: 8}}/>
                <Line dataKey="amountOutput" type="monotone"
                      name="Saídas" stroke="#e44c4e"
                      strokeWidth={5} dot={{r: 5}} activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
    </Container>
);
export default HistoryBox;