import styled from 'styled-components';

export const BasicMain = styled.main`
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const BasicContent = styled.div`
    display: grid;
    gap: 20px;
    width: 90%;
    margin: 0 auto;
    /* background-color: red; */
`;

export const St = styled.strong`
    font-weight: 700;
    color: ${(props) => props.theme.general.color}
`;
