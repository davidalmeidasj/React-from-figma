import React from "react";
import {IMovie} from "../../../../interfaces/product";
import plusIcon from "../../../../assets/img/icons/plus-icon.svg";
import minusIcon from "../../../../assets/img/icons/minus-icon.svg";
import trashIcon from "../../../../assets/img/icons/trash.svg";
import {
    Container,
    ContainerQuantityControl,
    ContainerTitles,
    InputQuantity,
    MovieCover,
    Title
} from "./styled";
import Icon from "./styled/Icon";
import TitleContainer from "./styled/TitleContainer";

interface IItemProps {
    movie: IMovie;
    onClickPlus: () => void;
    onClickMinus: () => void;
    onRemove: () => void;
    editQuantity: (quantity: number) => void;
}

const Item: React.FC<IItemProps> = ({movie, onClickMinus, onClickPlus, onRemove, editQuantity}) => {

    return (
        <Container>
            <TitleContainer>
                <MovieCover src={movie.image} />
                <ContainerTitles>
                    <Title>{movie.title}</Title>
                    <Title>{movie.price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</Title>
                </ContainerTitles>
            </TitleContainer>

            <TitleContainer justifyContent={'center'}>
                <ContainerQuantityControl>
                    <Icon src={minusIcon} onClick={() => onClickMinus()} />
                    <InputQuantity value={movie.quantity} onChange={(e) => {

                        const onlyNumbersFromValue = e.target.value.replace(/[^0-9]/g, '');

                        editQuantity(parseInt(onlyNumbersFromValue));
                    }} />
                    <Icon src={plusIcon} onClick={() => onClickPlus()} />
                </ContainerQuantityControl>
            </TitleContainer>

            <TitleContainer justifyContent={'space-between'}>
                    <Title>{(movie.price * movie.quantity).toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}</Title>
                    <Icon src={trashIcon} onClick={() => onRemove()} width={'18.31px'} />
            </TitleContainer>
        </Container>
    );
};

export default Item;