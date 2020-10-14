import React from "react";
import ContentHeader from "../../components/ContentHeader";
import {Container} from "./styles";
import SelectInput from "../../components/SelectInput";

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
        </Container>
    );
}

export default List;