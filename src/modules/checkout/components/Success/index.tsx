import React, {useEffect} from "react";
import successCheckoutImg from "../../../../assets/img/images/success-checkout.svg";
import Button from "../../../../components/Button";
import {State} from "../../../../reducers";
import {Dispatch} from "redux";
import {resetMovies} from "../../../../components/Movies/redux/action";
import {push} from "connected-react-router";
import {connect} from "react-redux";
import {resetCart} from "../../../cart/redux/action";
import {ButtonTitle, Container, SuccessImg, MainText} from "./styled";


type PropsFromRedux = MapStateToProps & MapDispatchToProps;

const Success: React.FC<PropsFromRedux> = ({goToHome, resetMovies, resetCart}) => {

    useEffect(() => {
        resetCart();
        resetMovies();
    }, [resetCart, resetMovies])

    return (
        <Container>
            <MainText>Compra realizada com sucesso!</MainText>
            <SuccessImg src={successCheckoutImg}/>
            <Button onClick={() => {
                goToHome()
            }} width="180px">
                <ButtonTitle>VOLTAR</ButtonTitle>
            </Button>
        </Container>
    );
};


const mapStateToProps = (store: State) => {
    return {
        movies: store.movies,
        cart: store.cart,
    };
};

const mapToDispatchToProps = (dispatch: Dispatch) => {
    return {
        resetMovies: () => dispatch(resetMovies()),
        resetCart: () => dispatch(resetCart()),
        goToHome: () => dispatch(push('/'))
    };
};

type MapStateToProps = ReturnType<typeof mapStateToProps>;
type MapDispatchToProps = ReturnType<typeof mapToDispatchToProps>;

export default connect(mapStateToProps, mapToDispatchToProps)(Success);