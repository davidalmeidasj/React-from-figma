import {IMovie} from "../../../../../interfaces/product";
import React from "react";
import minusIcon from "../../../../../assets/img/icons/minus-icon.svg";
import plusIcon from "../../../../../assets/img/icons/plus-icon.svg";
import trashIcon from "../../../../../assets/img/icons/trash.svg";
import {
    Container,
    ContainerQuantityControl,
    ContainerSubtotal,
    ContainerTitles,
    InputQuantity,
    MovieCover,
    PriceTitle,
    SubtotalTitle,
    Title,
    ValueTotalTitle
} from "./styled";
import TitleContainer from "./styled/TitleContainer";
import Icon from "./styled/Icon";
import ContainerPrice from "./styled/ContainerPrice";

interface IItemProps {
    movie: IMovie;
    onClickPlus: () => void;
    onClickMinus: () => void;
    onRemove: () => void;
    editQuantity: (quantity: number) => void;
}



const ItemMobile: React.FC<IItemProps> = ({movie, onClickMinus, onClickPlus, onRemove, editQuantity}) => {

    return (
        <Container>
            <TitleContainer alignItems={'flex-start'}>
                <MovieCover src={movie.image} />
                <ContainerTitles>
                    <Title>{movie.title}</Title>
                    <ContainerQuantityControl>
                        <Icon src={minusIcon} onClick={() => onClickMinus()} />
                        <InputQuantity value={movie.quantity} onChange={(e) => {

                            const onlyNumbersFromValue = e.target.value.replace(/[^0-9]/g, '');

                            editQuantity(parseInt(onlyNumbersFromValue));
                        }} />
                        <Icon src={plusIcon} onClick={() => onClickPlus()} />
                    </ContainerQuantityControl>
                </ContainerTitles>
            </TitleContainer>

            <TitleContainer alignItems={'flex-end'}>
                <ContainerTitles>
                    <ContainerPrice>
                        <PriceTitle>{movie.price.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</PriceTitle>
                        <Icon src={trashIcon} onClick={() => onRemove()} width={'18.31px'} />
                    </ContainerPrice>
                    <ContainerSubtotal>
                        <SubtotalTitle>SUBTOTAL</SubtotalTitle>
                        <ValueTotalTitle>{(movie.price * movie.quantity).toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}</ValueTotalTitle>
                    </ContainerSubtotal>
                </ContainerTitles>
            </TitleContainer>
        </Container>
    );
};

export default ItemMobile;