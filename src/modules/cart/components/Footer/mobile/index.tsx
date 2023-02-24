import React, {useContext} from "react";
import Button from "../../../../../components/Button";
import ContextCart from "../../../context/ContextCart";
import {Container, ContainerTotal, TitleButton, TotalTitle, TotalValue} from "./styled";

interface IFooterProps {
    total: number;
}

const FooterMobile: React.FC<IFooterProps> = ({total}) => {

    const {
        goToCheckout
    } = useContext(ContextCart);

    return (
        <Container>
            <ContainerTotal>
                <TotalTitle>
                    TOTAL
                </TotalTitle>
                <TotalValue>
                    {total.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </TotalValue>
            </ContainerTotal>

            <Button onClick={() => goToCheckout()} width='100%'>
                <TitleButton> FINALIZAR PEDIDO </TitleButton>
            </Button>
        </Container>
    );
};

export default FooterMobile;