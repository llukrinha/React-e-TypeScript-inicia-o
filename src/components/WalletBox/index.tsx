import React, {useMemo} from "react";

import arrowDownImg from "../../assets/arrow-down2.svg";
import arrowUpImg from "../../assets/arrow-up2.svg";
import cifraoImg from "../../assets/cifrao2.svg";

import {Container} from "./styles";

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerlable: string;
    icon: "cifrao" | "arrowDown" | "arrowUp";
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
                                                  title, amount, footerlable,
                                                  icon, color
                                              }) => {
    const iconSelected = useMemo( () => {
     switch (icon){
         case "cifrao":
             return cifraoImg;
         case "arrowDown":
             return arrowDownImg;
         case "arrowUp":
             return arrowUpImg;
         default:
             return undefined;
     }
    },[icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>{amount}</h1>
            <small>{footerlable}</small>
            <img src={iconSelected} alt={title}/>
        </Container>
    );
}
export default WalletBox;