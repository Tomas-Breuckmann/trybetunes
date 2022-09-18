import styled from 'styled-components';
import { BasicContent, BasicMain } from '../../Styles/GeneralStyles';

export const LoginMain = styled(BasicMain)`
 padding: 0;
`;

export const LoginContent = styled(BasicContent)`
/* display: flex: */
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    input {
        padding: 8px;
        width: 250px;
        margin: 0 0 12px 0px;
    }
    button {
        text-transform: uppercase;
        font-weight: 400;
        width: 100px;
        padding: 8px 0;
        border-radius: 4px;
        border: 1px solid;
        border-color: ${(props) => props.theme.button.border};
        background: ${(props) => props.theme.button.background};
        color: ${(props) => props.theme.button.color};
        position: relative;
        cursor: pointer;

        &::before {
        content:'';
        z-index:-1;
        position:absolute;
        display:block;
        width:100%;
        height:100%;
        top: -1px;
        left: -12px;
        opacity:0;
        width: 120px;
        transition: 0.1s opacity ease-in-out;
        }

        &:hover::before {
        opacity:1;
        transition: 0.3s opacity ease-in-out;
        filter:blur(12px);
        background: ${(props) => props.theme.button.background}; 
        }
    }
`;
