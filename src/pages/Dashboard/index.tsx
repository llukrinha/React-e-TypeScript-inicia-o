import React from "react";
import ContentHeader from "../../components/ContentHeader";
import {Container} from "./styles";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {

    const options = [
        {value: "Rodrido", lable: "Rodrigo"},
        {value: "Maria", lable: "Maria"},
        {value: "Ana", lable: "Ana"},
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;