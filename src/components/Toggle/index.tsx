import React from "react";
import {Container, ToggleLable, ToggleSelector} from "./styled";

const Toggle: React.FC = () => (
    <Container>
        <ToggleLable>ligth</ToggleLable>
        <ToggleSelector checked={false}
                uncheckedIcon={false}
                onChange={() => console.log("mudou")}/>
        <ToggleLable> dark</ToggleLable>
    </Container>
)
export default Toggle;