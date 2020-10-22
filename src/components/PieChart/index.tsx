import React from "react";
// import {PieChart, Pie, Cell, ResponsiveContainer} from "recharts";
import {Container, SideLeft, LegendContainer, Legend, SideRigth} from "./styles";

const PieChart: React.FC = () => (
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                <Legend color="#f7931b">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#e44c4e">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#f7931b">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#e44c4e">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#f7931b">
                    <div>5%</div>
                    <span>Entradas</span>
                </Legend>
                <Legend color="#e44c4e">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </SideLeft>
        <SideRigth>
            {/*<ResponsiveContainer>*/}
            {/*    <PieChart>*/}
            {/*        <Pie data={[{amount :30, percent: 95}]} labelLine={false} dataKey="percent"/>*/}
            {/*    </PieChart>*/}
            {/*</ResponsiveContainer>*/}
        </SideRigth>
    </Container>
);
export default PieChart;
