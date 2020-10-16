import React, {useMemo, useState, useEffect} from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import {Container, Content, Filters} from "./styles";

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

const List: React.FC<IRouteParams> = ({match}) => {
    const [data, setData] = useState<IData[]>([]);

    const {type} = match.params;
    const title = useMemo(() => {
        return type === "entry-balance" ? "Entradas" : "Saídas"
    }, [type]);
    const lineColor = useMemo(() => {
        return type === "entry-balance" ? "#f7931b" : "#e44c4e"
    }, [type]);

    const listData = useMemo(() => {
        return type === "entry-balance" ? gains : expenses;
    }, [type]);

    const months = [
        {value: 7, lable: "Julho"},
        {value: 8, lable: "Agosto"},
        {value: 9, lable: "Setembro"},
    ]
    const years = [
        {value: 2020, lable: 2020},
        {value: 2019, lable: 2019},
        {value: 2018, lable: 2018},
    ]

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E"
            }
        })
        setData(response);
    }, [])

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button type="button"
                        className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button type="button"
                        className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                            < HistoryFinanceCard
                                key={item.id}
                                tagColor={item.tagColor}
                                title={item.description}
                                subtitle={item.dateFormatted}
                                amount={item.amountFormatted}
                            />
                        )
                    )
                }
            </Content>
        </Container>
    );
}

export default List;