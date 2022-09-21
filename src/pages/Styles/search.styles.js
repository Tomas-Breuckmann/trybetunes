import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BasicContent, BasicMain } from '../../Styles/GeneralStyles';

export const SearchMain = styled(BasicMain)`
  padding-top: 30px;
  padding-bottom: 30px;
  background: ${(props) => props.theme.search.background};
  
`;

export const SearchContent = styled(BasicContent)`
    display: flex;
    padding-bottom: 30px;
    justify-content: center;
    background: ${(props) => props.theme.search.background};
`;

export const SearchContentResults = styled(BasicContent)`
    /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: ${(props) => props.theme.search.cardBackground};
        width: 150px;
        /* border: 1px solid; */
        /* border-color: ${(props) => props.theme.search.cardBorder}; */
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
        border-radius: 4px;
    }

    img {
        width: 150px;
        border-radius: 4px 4px 0 0;
    }

    p {
        font-size: 10px;
        overflow: hidden;
        max-width: 20ch;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 8px 0;
    }
`;

export const LinkStyled = styled(Link)`
    padding-bottom: 4px;
`;
