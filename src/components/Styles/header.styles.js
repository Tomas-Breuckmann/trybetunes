import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasicContent, BasicMain } from '../../Styles/GeneralStyles';

export const HeaderMain = styled(BasicMain)`
  padding-top: 30px;
  padding-bottom: 30px;
  background: ${(props) => props.theme.header.background};
  
`;

export const HeaderContent = styled(BasicContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    /* background-color: red; */
`;

export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.header.color};
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid;
    background: ${(props) => props.theme.button.background};
    border-color: ${(props) => props.theme.button.border};
`;
