import { css } from "@emotion/react";

export const reset = css`
    html, body #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #202020;
        font-family: 'Ownglyph_meetme-Rg';
        font-size: 20px;
         
        @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    }
`;