import React, {useContext} from "react";
import Button from "../../../../components/Button";
import ContextCart from "../../context/ContextCart";
import {Container, ContainerTotal, TitleButton, TotalTitle, TotalValue} from "./styled";

interface IFooterProps {
    total: number;
}

const Footer: React.FC<IFooterProps> = ({total}) => {
    const {
        goToCheckout
    } = useContext(ContextCart);

    return (
        <Container>
            <Button width='235.42px' onClick={() => goToCheckout()}>
                <TitleButton> FINALIZAR PEDIDO </TitleButton>
            </Button>

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
        </Container>
    );
};

export default Footer;