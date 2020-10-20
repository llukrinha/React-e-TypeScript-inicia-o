import React, {useMemo, useState} from "react";
import ContentHeader from "../../components/ContentHeader";
import {Container, Content} from "./styles";
import SelectInput from "../../components/SelectInput";

import listOfmonths from "../../utils/months";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

import WalletBox from "../../components/WalletBox";

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const options = [
        {value: "Rodrido", lable: "Rodrigo"},
        {value: "Maria", lable: "Maria"},
        {value: "Ana", lable: "Ana"},
    ];

    const months = useMemo(() => {
        return listOfmonths.map((month, index) => {
            return {
                value: index + 1,
                lable: month,
            }
        })
    }, []);

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        });
        return uniqueYears.map(year => {
            return {
                value: year,
                lable: year,
            }
        });
    }, []);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw  new Error("invalid month value. is accept 0 - 24.")
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch (error) {
            throw  new Error("invalid year value. Is accept integer numbers.")
        }
    }
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#f7931b">
                <SelectInput options={months}
                             onChange={(e) => handleMonthSelected(e.target.value)}
                             defaultValue={monthSelected}/>
                <SelectInput options={years}
                             onChange={(e) => handleYearSelected(e.target.value)}
                             defaultValue={yearSelected}/>
            </ContentHeader>

            <Content>
                <WalletBox title="saldo" amount={150.00} footerlable="atualizado com base nas entradas e saídas"
                           icon="cifrao" color="#4e41f0"/>

                <WalletBox title="saldo" amount={5000.00} footerlable="atualizado com base nas entradas e saídas"
                           icon="arrowUp" color="#f7931b"/>

                <WalletBox title="saldo" amount={4850.00} footerlable="atualizado com base nas entradas e saídas"
                           icon="arrowDown" color="#e44c4e"/>
            </Content>
        </Container>
    );
}

export default Dashboard;