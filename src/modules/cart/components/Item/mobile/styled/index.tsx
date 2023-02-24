import styled from "styled-components";
import {down} from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MovieCover = styled.img`
  width: 64px;
  height: 82px;
`;

export const ContainerTitles = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  height: 82px;
`;

export const ContainerSubtotal = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  width: 98px;
  height: 38px;

  ${down("sm")} {
    margin-left: 3px;
    width: unset;
  }
`;

export const PriceTitle = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #2F2E41;
  margin-right: 16px;

  ${down("sm")} {
    margin-right: 15px;
    margin-left: -18px;
  }
`;

export const SubtotalTitle = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #999999;
`;

export const ValueTotalTitle = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #2F2E41;
`;

export const Title = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #2F2E41;
`;

export const ContainerQuantityControl = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
`;

export const InputQuantity = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;

  width: 62px;
  height: 26px;

  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  margin: -7px 5px 0 5px;
`;