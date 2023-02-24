import styled from "styled-components";
import {alignItems, flexDirection} from "styled-system";
import {down} from "styled-breakpoints";

type ContainerPriceProps = {
    flexDirection?: string;
    alignItems?: string;
}

const ContainerPrice = styled.div<ContainerPriceProps>`
  ${flexDirection};
  ${alignItems};
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
  height: 82px;
  width: 98px;

  ${down("sm")} {
    margin-left: 3px;
    width: unset;
  }
`;

ContainerPrice.defaultProps = {
    flexDirection: 'row',
    alignItems: 'flex-start'
}

export default ContainerPrice;