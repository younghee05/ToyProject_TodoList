import { css } from "@emotion/react";


export const HeaderContainerLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const  TitleLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;

`;

export const h1Title = css`
    box-sizing: border-box;
    margin: 10px 0px;
    padding: 5px 7px 5px 5px;
    color: #ebebeb;
    font-family:'ONE-Mobile-POP';
    @font-face {
        font-family: 'ONE-Mobile-POP';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
        font-weight: normal;
        font-style: normal;
}
`;

export const InputLayout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 700px;
    height: 40px;
    input:focus {outline:none;}
`;

export const addInputLayout = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 400px;
    border-bottom: 2px solid #ebebeb;
`;

export const addDateInput = css` 
    box-sizing: border-box;
    margin-right: 5px;
    width: 150px;
    border: none;
    color: #ebebeb;
    background-color: transparent;
    cursor: pointer;
    font-size: 30px;
    font-family: 'Ownglyph_meetme-Rg';
    @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

`;

export const Input = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size: 25px;
    background: none;
    margin-left: 10px;
    border: none;
    color: #ebebeb;
    cursor: pointer;
    font-family: 'Ownglyph_meetme-Rg';
    @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
     
`;

export const ButtonLayout = css`
    box-sizing: border-box;
    margin-left: 10px;
    width: 50px;
    height: 100%;
    color:#ffffff;
    cursor: pointer;
    font-family: 'Ownglyph_meetme-Rg';
    @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;

export const InputByLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin: 0px 890px 10px 0px;
    height: 50px;
    *:focus {
        outline: 0;
    }
    
`;

export const dateInput = css`
    box-sizing: border-box;
    color: #ebebeb;
    font-size: 30px;
    border: none;
    background-color: transparent;
    font-family: 'Ownglyph_meetme-Rg';
    @font-face {
        font-family: 'Ownglyph_meetme-Rg';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

`;

export const ArrowLayout = css`
    box-sizing: border-box;
    height: 100%;
    color: #ebebeb;
    cursor: pointer;

`;

export const fontColor = css`
    color: #ebebeb;
`;

