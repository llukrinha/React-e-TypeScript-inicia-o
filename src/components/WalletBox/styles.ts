import styled from "styled-components";

interface IContainerProps{
    color: string;
}

export const Container= styled.div<IContainerProps>`
width: 32%;
height: 150px;

margin: 10px 0;

background-color: ${props => props.color};
`;



