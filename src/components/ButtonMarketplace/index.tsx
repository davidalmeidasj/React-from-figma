import Button from "../Button";
import cartIcon from "../../assets/img/icons/cart-icon.svg";
import React from "react";
import styled from "styled-components";

const ButtonTitle = styled.span`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const ButtonQuantity = styled.span`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const ButtonIcon = styled.img`
  width: 11.424001693725586px;
  margin-bottom: -2px;
`;

type ButtonMarketplaceProps = {
    title: string;
    quantity: number;
    onClick: Function;
}

const ButtonMarketplace = ({title, quantity, onClick}: ButtonMarketplaceProps) => (
    <Button onClick={() => onClick()} background={quantity ? '#039B00' : '#009EDD'}>
        <ButtonQuantity>
            <ButtonIcon src={cartIcon}/> {quantity}
        </ButtonQuantity>
        <ButtonTitle>{title}</ButtonTitle>
    </Button>
);

ButtonMarketplace.defaultProps = {
    quantity: 0
}

export default ButtonMarketplace;