import styled from 'styled-components';
import {down} from 'styled-breakpoints';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 10px;
  gap: 474px;

  position: absolute;
  width: 960px;
  height: 74px;
  top: 0;

  background: #2F2E41;
  
  z-index: 1;


  ${down("lg")} {
    width: 100%;
    gap: unset;
    position: fixed;
  }
`;

export const Title = styled.h1`
  font-family: Open Sans, serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #FFFFFF;
  cursor: pointer;
`;

export const SubTitle = styled.h1`
  font-family: Open Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
`;

export const ItemsTitle = styled.h1`
  font-family: Open Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: #999999;
`;

export const MenuCart = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const MenuCartTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  margin-right: 9.33px;
`;

export const MenuCartIcon = styled.img`
  display: flex;
  justify-content: space-between;
  height: 25.30px;
  width: 29.31px;
  border-radius: 0;
  margin-top: 5px;
`;



