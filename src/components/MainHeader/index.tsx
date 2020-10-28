import React, {useMemo, useState} from 'react';

import emojis from '../../utils/emojis';
import Toggle from "../Toggle";

import {useTheme} from "../../hooks/theme";

import {Container, Profile, UserName, Welcome} from './styles';

const MainHeader: React.FC = () => {
    const {toggleTheme, theme} = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === "Dark" ? true : false);

    const handleChangeTheme = ()=>{
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    const emoji = useMemo(() => {
        const i = Math.floor(Math.random() * emojis.length);
        return emojis[i]
    }, []);

    return (
        <Container>
            <Toggle labelLeft="Light" labelRight="Dark"
                    checked={darkTheme} onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Lucas Cantanhêde</UserName>
            </Profile>
        </Container>

    )
}
export default MainHeader;