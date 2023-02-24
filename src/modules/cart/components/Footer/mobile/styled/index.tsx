import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid #999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 21px;
`;

export const ContainerTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  align-self: flex-end;
`;

export const TotalTitle = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #999999;
  margin-right: 5px;

  width: 61.47px;
  justify-content: center;
  height: 12px;
`;

export const TotalValue = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #2F2E41;
  min-width: 130.79px;
  height: 21px;
  justify-content: center;
`;

export const TitleButton = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;

  color: #FFFFFF;
`;