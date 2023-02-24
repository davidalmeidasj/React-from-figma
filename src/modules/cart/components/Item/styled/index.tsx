import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const MovieCover = styled.img`
  width: 89px;
  height: 114px;
`;
export const ContainerTitles = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 52px;
  gap: 6px;
`;
export const Title = styled.span`
  font-family: 'Open Sans',sans-serif;
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
  margin-left: 52px;
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

