import React, {useContext} from "react";
import emptyCartImg from "../../../../assets/img/images/empty-cart.svg";
import Button from "../../../../components/Button";
import ContextCart from "../../context/ContextCart";
import {ButtonTitle, Container, EmptyList, EmptyText} from "./styled";

export const EmptyCartList = () => {
    const {
        goToHome
    } = useContext(ContextCart);

    return (
        <Container>
            <EmptyText>Parece que não há nada por aqui :(</EmptyText>
            <EmptyList src={emptyCartImg}/>
            <Button onClick={() => {
                goToHome()
            }} width="180px">
                <ButtonTitle>VOLTAR</ButtonTitle>
            </Button>
        </Container>
    );
};

export default EmptyCartList;