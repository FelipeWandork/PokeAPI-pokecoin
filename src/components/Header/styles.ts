import styled from 'styled-components';

export const Container = styled.header`
    height: 5rem;
    border-bottom: 1px solid #000;
    background-color: #ef5350;
`;

export const Content = styled.div`
        max-width: 1120px;
        margin: 0;
        padding: 1rem;
        height: 5rem;
        height: 5rem;
        font-family: 'Poppins', Helvetica, sans-serif;
        font-size: 1rem;
        color: #fff;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 10rem;
        }

        a {
            padding: 1.5rem;
        

            &:hover {
                color: #ffcccc;
                cursor: pointer;
            }
            
        }


`;



// .headerContent {
//     max-width: 1120px;
//     height: 5rem;
//     margin: 0 auto;
//     padding: 0 2rem;

//     display: flex;
//     align-items: center;

//     nav {
//         margin-left: 5rem;
//         height: 5rem;

//         a {
//             display: inline-block;
//             position: relative;
//             padding: 0 0.5rem;
//             height: 5rem;
//             line-height: 5rem;
//             color: var(--gray-300);

//             transition: color 0.2s;

//             & + a {
//                 margin-left: 2rem;
//             }

//             &:hover {
//                 color: var(--white);
//             }

//             &.active {
//                 color: var(--white);
//                 font-weight: bold;
//             }
//             &.active::after {
//                 content: '';
//                 height: 3px;
//                 border-radius: 3px 3px 0 0;
//                 width: 100%;
//                 position: absolute;
//                 bottom: 1px;
//                 left: 0;
//                 background: var(--yellow-500);
//             }
//         }
//     }

//     button {
//         margin-left: auto;
//     }
// }