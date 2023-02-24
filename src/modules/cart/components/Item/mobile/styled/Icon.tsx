import styled from "styled-components";
import {width} from "styled-system";

type IconProps = {
    width?: string
}

export const Icon = styled.img<IconProps>`
  ${width};
  height: 18px;
  cursor: pointer;
`;

Icon.defaultProps = {
    width: '18px'
}

export default Icon;