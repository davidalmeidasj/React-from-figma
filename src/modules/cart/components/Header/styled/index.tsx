import styled from "styled-components";
import {justifyContent} from "styled-system";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.span`
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #999999;
`;

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