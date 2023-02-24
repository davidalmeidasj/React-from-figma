import styled from "styled-components";
import {down} from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  gap: 32px;

  position: absolute;
  width: 960px;
  max-width: 960px;
  height: 532.8px;
  top: 98px;

  background: #FFFFFF;
  border-radius: 4px;
  
  overflow: hidden;

  ${down("lg")} {
    width: 90%;
  }

  ${down("sm")} {
    width: 95%;
  }
`;

export const EmptyList = styled.img`
  width: 447px;
  height: 265.8px;

`;

export const EmptyText = styled.span`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #2F2E41;
`;

export const ButtonTitle = styled.span`
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;

  color: #FFFFFF;
`;