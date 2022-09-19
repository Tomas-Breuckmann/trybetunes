// button {
//     text-transform: uppercase;
//     font-weight: 400;
//     width: 100px;
//     padding: 8px 0;
//     border-radius: 4px;
//     border: 1px solid;
//     border-color: ${(props) => props.theme.button.border};
//     background: ${(props) => props.theme.button.background};
//     color: ${(props) => props.theme.button.color};
//     position: relative;
//     cursor: pointer;

//     &::before {
//     content:'';
//     z-index:-1;
//     position:absolute;
//     display:block;
//     width:100%;
//     height:100%;
//     top: -1px;
//     left: -12px;
//     opacity:0;
//     width: 120px;
//     transition: 0.1s opacity ease-in-out;
//     }

//     &:hover::before {
//     opacity:1;
//     transition: 0.3s opacity ease-in-out;
//     filter:blur(12px);
//     background: ${(props) => props.theme.button.background};
//     }
// }
