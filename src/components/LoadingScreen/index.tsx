import React from 'react';
import styled from 'styled-components';
import loadingIcon from '../../assets/img/icons/load-spinner.png'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingIcon = styled.img`
    height: 62.25px;
    width: 62.25px;

    animation: rotateInput 0.8s linear infinite;
    
    @keyframes rotateInput {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
`;

type LoadingScreenProps = {
    isLoading: boolean;
    children: JSX.Element;
}

const LoadingScreen = ({ isLoading, children } : LoadingScreenProps) => {
    if (!isLoading) {
        return (children)
    }

    return (
        <Container>
            <LoadingIcon src={loadingIcon}/>
        </Container>
    )
};

LoadingScreen.defaultProps = {
    isLoading: false
}

export default LoadingScreen;