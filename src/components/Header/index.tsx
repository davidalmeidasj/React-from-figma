import React from 'react';
import {Content, ItemsTitle, MenuCart, MenuCartIcon, MenuCartTitles, SubTitle, Title} from "./styles";
import iconCart from "../../assets/img/icons/my-cart-icon.svg";
import {State} from "../../reducers";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {push} from "connected-react-router";

type PropsFromRedux = MapStateToProps & MapDispatchToProps;

const Header: React.FC<PropsFromRedux> = ({cart, goToCart, goToHome}) => {
    return (
        <Content>
            <Title onClick={() => goToHome()}>
                WeMovies
            </Title>
            <MenuCart onClick={goToCart}>
                <MenuCartTitles>
                    <SubTitle>
                        Meu Carrinho
                    </SubTitle>
                    <ItemsTitle>
                        {cart.list.length} items
                    </ItemsTitle>
                </MenuCartTitles>
                <MenuCartIcon src={iconCart} />
            </MenuCart>
        </Content>
    );
};

const mapStateToProps = (store: State) => {
    return {
        cart: store.cart
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        goToCart: () => dispatch(push('/cart')),
        goToHome: () => dispatch(push('/')),
    };
};

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Header)
