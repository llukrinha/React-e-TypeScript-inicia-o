import React, {useMemo, useState} from "react";
import ContentHeader from "../../components/ContentHeader";
import {Container, Content} from "./styles";
import SelectInput from "../../components/SelectInput";

import listOfmonths from "../../utils/months";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg"
import grinningImg from "../../assets/grinning.svg"

import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

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

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error("Invalid amount! Amount must be number.")
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error("Invalid amount! Amount must be number.")
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [monthSelected, yearSelected]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;
        const percentGains = (totalGains / total) * 100;
        const percentExpenses = (totalExpenses / total) * 100;

        const data = [{
            name: "Entradas",
            value: totalGains,
            percent: Number(percentGains.toFixed(1)),
            color: "#e44c4e"
        }, {
            name: "Saídas",
            value: totalExpenses,
            percent: Number(percentExpenses.toFixed(1)),
            color: "#f7931b"
        },
        ];
        return data;
    }, [totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfmonths.map((_, month) => {
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount);
                    } catch {
                        throw new Error("amountEntry entry is invalid. amountEntry must be valid number.")
                    }
                }
            });
            let amountOutput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(expense.amount);
                    } catch {
                        throw new Error("amountOutput entry is invalid. amountOutput must be valid number.")
                    }
                }
            });
            return {
                monthNumber: month,
                month: listOfmonths[month].substring(0, 3),
                amountEntry,
                amountOutput
            }
        })
            .filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();
                return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
            });
    }, [yearSelected]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: "Aaaa!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e repense suas despesas.",
                icon: sadImg
            }
        } else if (totalBalance === 0) {
            return {
                title: "Uufa!",
                description: "Neste mês você foi bem, mas não sobrou nada, podemos melhorar.",
                footerText: "Proximo mês vamos ver se sobra ao menos para comprar um sorvete.",
                icon: grinningImg
            }
        } else {
            return {
                title: "Oopa!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir seu saldo.",
                icon: happyImg
            }
        }
    }, [totalBalance]);
    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
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
                <WalletBox title="saldo" amount={totalBalance} footerlable="atualizado com base nas entradas e saídas"
                           icon="cifrao" color="#4e41f0"/>

                <WalletBox title="entradas" amount={totalGains} footerlable="atualizado com base nas entradas e saídas"
                           icon="arrowUp" color="#f7931b"/>

                <WalletBox title="saídas" amount={totalExpenses} footerlable="atualizado com base nas entradas e saídas"
                           icon="arrowDown" color="#e44c4e"/>
                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}/>

                <PieChartBox data={relationExpensesVersusGains}/>

                <HistoryBox data={historyData} lineColorAmountEntry="#f7931b" lineColorAmountOutput="#e44c4e"/>
            </Content>
        </Container>
    );
}

export default Dashboard;