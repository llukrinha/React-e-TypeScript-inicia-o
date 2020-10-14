import React from "react";
import ContentHeader from "../../components/ContentHeader";
import {Container, Content} from "./styles";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

const List: React.FC = () => {

    const options = [
        {value: "Rodrido", lable: "Rodrigo"},
        {value: "Maria", lable: "Maria"},
        {value: "Ana", lable: "Ana"},
    ]

    return (
        <Container>
            <ContentHeader title="List" lineColor="#f7931b">
                <SelectInput options={options}/>
            </ContentHeader>
            <Content>
                <HistoryFinanceCard cardColor={"#313862"}
                                    tagColor={"#e44c4e"}
                                    title={"Conta de Luz"}
                                    subtitle={"27/07/2020"}
                                    amount={"R$130,00"}
                />
            </Content>
            <Content>
                <HistoryFinanceCard cardColor={"#313862"}
                                    tagColor={"#e44c4e"}
                                    title={"Conta de Luz"}
                                    subtitle={"27/07/2020"}
                                    amount={"R$130,00"}
                />
            </Content>
            <Content>
                <HistoryFinanceCard cardColor={"#313862"}
                                    tagColor={"#e44c4e"}
                                    title={"Conta de Luz"}
                                    subtitle={"27/07/2020"}
                                    amount={"R$130,00"}
                />
            </Content>
            <Content>
                <HistoryFinanceCard cardColor={"#313862"}
                                    tagColor={"#e44c4e"}
                                    title={"Conta de Luz"}
                                    subtitle={"27/07/2020"}
                                    amount={"R$130,00"}
                />
            </Content>
            <Content>
                <HistoryFinanceCard cardColor={"#313862"}
                                    tagColor={"#e44c4e"}
                                    title={"Conta de Luz"}
                                    subtitle={"27/07/2020"}
                                    amount={"R$130,00"}
                />
            </Content>
        </Container>
    );
}

export default List;