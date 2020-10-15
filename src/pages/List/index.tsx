import React, {useMemo} from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import {Container, Content, Filters} from "./styles";

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

const List: React.FC<IRouteParams> = ({match}) => {

    const {type} = match.params;
    const title = useMemo(() => {
        return type === "entry-balance" ? "Entradas" : "Saídas"
    }, [type]);
    const lineColor = useMemo(() => {
        return type === "entry-balance" ? "#f7931b" : "#e44c4e"
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
                <HistoryFinanceCard tagColor={"#e44c4e"}
                                    title={"Conta de Luz"}
                                    subtitle={"27/07/2020"}
                                    amount={"R$130,00"}
                />
            </Content>
        </Container>
    );
}

export default List;