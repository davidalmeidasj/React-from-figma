import React from "react";
import TitleContainer, {Container, Title} from "./styled";

const Header = () => {

    return (
        <Container>
            <TitleContainer>
                <Title>PRODUTO</Title>
            </TitleContainer>
            <TitleContainer justifyContent={'center'}>
                <Title>QTD</Title>
            </TitleContainer>
            <TitleContainer>
                <Title>SUBTOTAL</Title>
            </TitleContainer>
        </Container>
    );
};

export default Header;