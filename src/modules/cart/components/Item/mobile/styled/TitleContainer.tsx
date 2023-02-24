import styled from "styled-components";
import {alignItems, justifyContent} from "styled-system";

type TitleContainerProps = {
    justifyContent?: string;
    alignItems?: string;
}

const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  ${alignItems};
  ${justifyContent};
`;

TitleContainer.defaultProps = {
    justifyContent: 'flex-start',
    alignItems: 'center',
}

export default TitleContainer;