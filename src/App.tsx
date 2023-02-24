import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routes from "./routes/routes";
import styled from "styled-components";
import configureStore, {history} from "./configureStore";
import {Provider} from "react-redux";
import {GlobalStyles} from "./assets/styles/GlobalStyles";

const Container = styled.div`
  background-color: #2F2E41;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const store = configureStore()

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <Container>
                <ConnectedRouter history={history}>
                    { routes }
                </ConnectedRouter>
            </Container>
        </Provider>

    )
}

export default App