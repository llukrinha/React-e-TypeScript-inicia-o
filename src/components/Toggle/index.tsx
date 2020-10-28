import React from "react";
import {Container, ToggleLable, ToggleSelector} from "./styles";

interface IToggleProps {
    labelLeft: string,
    labelRight: string,
    checked: boolean,

    onChange(): void,
}

const Toggle: React.FC<IToggleProps> = ({
                                            labelLeft, labelRight,
                                            checked, onChange
                                        }) => (
    <Container>
        <ToggleLable>{labelLeft}</ToggleLable>
        <ToggleSelector checked={checked}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onChange={onChange}
        />
        <ToggleLable>{labelRight}</ToggleLable>
    </Container>
)
export default Toggle;