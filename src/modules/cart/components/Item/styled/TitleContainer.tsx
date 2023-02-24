import styled from "styled-components";
import {justifyContent} from "styled-system";

type TitleContainerProps = {
    justifyContent?: string
}
const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  align-items: center;
  ${justifyContent};
  width: 33.33%;
`;

TitleContainer.defaultProps = {
    justifyContent: 'flex-start'
}

export default TitleContainer;