import React, {useMemo} from "react";
import CountUp from "react-countup";
import arrowDownImg from "../../assets/arrow-down.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import cifraoImg from "../../assets/logo.svg";

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
    const iconSelected = useMemo(() => {
        switch (icon) {
            case "cifrao":
                return cifraoImg;
            case "arrowDown":
                return arrowDownImg;
            case "arrowUp":
                return arrowUpImg;
            default:
                return undefined;
        }
    }, [icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    decimal={","}
                    decimals={2}
                />
            </h1>
            <small>{footerlable}</small>
            <img src={iconSelected} alt={title}/>
        </Container>
);
}
export default WalletBox;