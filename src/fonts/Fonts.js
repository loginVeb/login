import { createGlobalStyle } from 'styled-components';

import tucsononewoff2 from './tucsonone.woff2';
import tucsononewoff from './tucsonone.woff';

export default createGlobalStyle`

    @font-face {
        font-family: 'tucsononewoff2';
        src: local('tucsononewoff'), local('tucsononewoff2'),
        url(${tucsononewoff2}) format('woff2'),
        url(${tucsononewoff}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }
`;
