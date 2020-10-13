import React, {useMemo} from 'react';

import emojis from '../../utils/emojis';

import Toggle from "../Toggle";

import {Container, Profile, UserName, Welcome} from './styles';

const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const i = Math.floor(Math.random() * emojis.length);
        return emojis[i]
    }, []);

    return (
        <Container>
            <Toggle/>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Lucas Cantanhêde</UserName>
            </Profile>
        </Container>

    )
}
export default MainHeader;