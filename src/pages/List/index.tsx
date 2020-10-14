import React from "react";
import ContentHeader from "../../components/ContentHeader";
import {Container, Content, Filters} from "./styles";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {

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
            <ContentHeader title="List" lineColor="#f7931b">
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