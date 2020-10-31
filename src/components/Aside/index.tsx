import React from "react";
import logoImg from "../../assets/logo.svg"
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from "react-icons/md"

import {useAuth} from "../../hooks/auth";

import {Container, Header, LogImg, MenuContainer, MenuItemLink, MenuItemButton, Title} from "./styles";

const Aside: React.FC = () => {
    const {signOut} = useAuth();
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>
                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>
        </Container>
    )
}
export default Aside;