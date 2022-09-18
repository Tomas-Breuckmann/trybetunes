import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinnerAnim = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.span`
  width: 30px;
  height: 30px;
  border-top-color: #999;
  border-left-color: #444;
  animation: ${spinnerAnim} 0.4s linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;  
  box-sizing: border-box;
  display: inline-block;
  /* position: absolute; */
  /* left: 50%; */
  /* top: 0; */
  vertical-align: middle;
`;

class Loading extends React.Component {
  render() {
    return (
      // <H1>Loading...</H1>
      <Spinner />
    );
  }
}

export default Loading;
